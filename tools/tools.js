/* global Blob, URL */
((root, factory) => {
    const api = factory();
    if (typeof module === "object" && module.exports) {
        module.exports = api;
    }
    root.EASuysTools = api;
    if (typeof document !== "undefined") {
        document.addEventListener("DOMContentLoaded", () => api.initApp());
    }
})(typeof globalThis !== "undefined" ? globalThis : window, () => {
    const LANGS = {
        nl: {
            locale: "nl-BE",
            pageTitle: "EA Suys rekentools",
            intro: "Indicatieve rekenhulpen voor renovatie, gebouwtechnieken en technische haalbaarheid.",
            calculate: "Bereken",
            print: "Print rapport",
            downloadReport: "Download PDF",
            save: "Bewaar invoer",
            load: "Laad invoer",
            localSave: "Bewaar lokaal",
            localLoad: "Laad lokaal",
            mail: "Vraag studie aan",
            disclaimerTitle: "Status",
            disclaimer: "Deze tools zijn indicatief. Ze vervangen geen ontwerpnota, normcontrole, EPB-verslaggeving of projectgebonden studie door een bevoegd ontwerper.",
            inputs: "Invoer",
            results: "Resultaat",
            details: "Tussenstappen",
            checks: "Verificatie",
            warnings: "Aandachtspunten",
            errors: "Controleer de invoer",
            noResult: "Vul de invoer aan om een resultaat te berekenen.",
            calculating: "Berekening loopt...",
            apiUnavailable: "De rekendienst is tijdelijk niet bereikbaar.",
            reportUnavailable: "Bereken eerst de gebouwtechnieken conceptcheck om een PDF te downloaden.",
            reportDownloaded: "PDF-rapport gegenereerd.",
            fileError: "Dit bestand kon niet worden geladen.",
            fileLoaded: "Invoer geladen.",
            savedLocal: "Invoer lokaal bewaard in deze browser.",
            loadedLocal: "Lokale invoer geladen.",
            noLocal: "Geen lokale invoer gevonden.",
            projectName: "Projectnaam",
            unit: "Eenheid",
            formula: "Formule",
            value: "Waarde",
            note: "Nota",
            component: "Bouwdeel",
            uValue: "U-waarde",
            area: "Oppervlakte",
            loss: "Verlies",
            yes: "Ja",
            no: "Nee",
            missing: "Ontbreekt",
            ok: "OK",
            attentionLow: "lage aandacht",
            attentionMedium: "matige aandacht",
            attentionHigh: "hoge aandacht",
            positiveDeltaT: "ΔT moet positief zijn.",
            pairComponentValues: "U-waarde en oppervlakte samen invullen.",
            directFlowUsed: "Direct debiet gebruikt; volume en luchtwissels blijven informatief.",
            noHeatInput: "Geen bouwdelen of ventilatiedebiet ingevuld.",
            highVelocity: "Hoge luchtsnelheid: controleer geluid, drukverlies en comfort.",
            highPriceSpread: "Groot prijsverschil: vergelijk aannames, uitsluitingen en technische prestaties.",
            lowAcoustic: "Indicatie blijft onder de richtwaarde; bekijk opbouw, aansluitingen en flankerende overdracht.",
            largeOpening: "Grote doorbraak: stabiliteitsconcept vroeg vastleggen.",
            multipleFloors: "Meerdere bouwlagen erboven: belastingafdracht en tijdelijke steun kritisch.",
            largeSpan: "Grote overspanning: vervorming en uitvoerbaarheid controleren.",
            newLoads: "Nieuwe of hogere lasten: bestaande structuur opnieuw beoordelen.",
            ctaSubject: "Vraag over EA Suys rekentools",
            ctaBody: "Beste,\n\nGraag bespreek ik een project op basis van de online rekentools.\n\nProject:\n",
            mailFallback: "Opent er geen mailvenster? Mail naar info@easuys.be met deze projectnaam en voeg eventueel de bewaarde invoer toe."
        },
        en: {
            locale: "en-GB",
            pageTitle: "EA Suys calculation tools",
            intro: "Indicative tools for renovation, building services and technical feasibility.",
            calculate: "Calculate",
            print: "Print report",
            downloadReport: "Download PDF",
            save: "Save input",
            load: "Load input",
            localSave: "Save locally",
            localLoad: "Load locally",
            mail: "Request a study",
            disclaimerTitle: "Status",
            disclaimer: "These tools are indicative. They do not replace a design note, code check, EPB reporting or project-specific study by a competent designer.",
            inputs: "Input",
            results: "Result",
            details: "Intermediate steps",
            checks: "Verification",
            warnings: "Attention points",
            errors: "Check the input",
            noResult: "Complete the input to calculate a result.",
            calculating: "Calculation running...",
            apiUnavailable: "The calculation service is temporarily unavailable.",
            reportUnavailable: "Calculate the building-services conceptcheck first to download a PDF.",
            reportDownloaded: "PDF report generated.",
            fileError: "This file could not be loaded.",
            fileLoaded: "Input loaded.",
            savedLocal: "Input saved locally in this browser.",
            loadedLocal: "Local input loaded.",
            noLocal: "No local input found.",
            projectName: "Project name",
            unit: "Unit",
            formula: "Formula",
            value: "Value",
            note: "Note",
            component: "Building part",
            uValue: "U-value",
            area: "Area",
            loss: "Loss",
            yes: "Yes",
            no: "No",
            missing: "Missing",
            ok: "OK",
            attentionLow: "low attention",
            attentionMedium: "medium attention",
            attentionHigh: "high attention",
            positiveDeltaT: "ΔT must be positive.",
            pairComponentValues: "Enter U-value and area together.",
            directFlowUsed: "Direct flow used; volume and air changes remain informative.",
            noHeatInput: "No building parts or ventilation flow entered.",
            highVelocity: "High air velocity: check noise, pressure loss and comfort.",
            highPriceSpread: "Large price spread: compare assumptions, exclusions and technical performance.",
            lowAcoustic: "The indication remains below the target; review build-up, junctions and flanking transmission.",
            largeOpening: "Large opening: define the structural concept early.",
            multipleFloors: "Several floors above: load transfer and temporary support are critical.",
            largeSpan: "Large span: check deflection and buildability.",
            newLoads: "New or higher loads: reassess the existing structure.",
            ctaSubject: "Question about EA Suys calculation tools",
            ctaBody: "Dear,\n\nI would like to discuss a project based on the online calculation tools.\n\nProject:\n",
            mailFallback: "If no mail window opens, email info@easuys.be with this project name and optionally attach the saved input."
        },
        fr: {
            locale: "fr-BE",
            pageTitle: "Outils de calcul EA Suys",
            intro: "Outils indicatifs pour rénovation, techniques du bâtiment et faisabilité technique.",
            calculate: "Calculer",
            print: "Imprimer le rapport",
            downloadReport: "Télécharger PDF",
            save: "Enregistrer l'entrée",
            load: "Charger l'entrée",
            localSave: "Enregistrer localement",
            localLoad: "Charger localement",
            mail: "Demander une étude",
            disclaimerTitle: "Statut",
            disclaimer: "Ces outils sont indicatifs. Ils ne remplacent pas une note de calcul, un contrôle normatif, une mission PEB ou une étude de projet par un concepteur compétent.",
            inputs: "Entrée",
            results: "Résultat",
            details: "Étapes intermédiaires",
            checks: "Vérification",
            warnings: "Points d'attention",
            errors: "Vérifiez l'entrée",
            noResult: "Complétez l'entrée pour calculer un résultat.",
            calculating: "Calcul en cours...",
            apiUnavailable: "Le service de calcul est temporairement indisponible.",
            reportUnavailable: "Calculez d'abord le conceptcheck techniques du bâtiment pour télécharger un PDF.",
            reportDownloaded: "Rapport PDF généré.",
            fileError: "Ce fichier n'a pas pu être chargé.",
            fileLoaded: "Entrée chargée.",
            savedLocal: "Entrée enregistrée localement dans ce navigateur.",
            loadedLocal: "Entrée locale chargée.",
            noLocal: "Aucune entrée locale trouvée.",
            projectName: "Nom du projet",
            unit: "Unité",
            formula: "Formule",
            value: "Valeur",
            note: "Note",
            component: "Élément",
            uValue: "Valeur U",
            area: "Surface",
            loss: "Perte",
            yes: "Oui",
            no: "Non",
            missing: "Manquant",
            ok: "OK",
            attentionLow: "attention faible",
            attentionMedium: "attention moyenne",
            attentionHigh: "attention élevée",
            positiveDeltaT: "ΔT doit être positif.",
            pairComponentValues: "Indiquez la valeur U et la surface ensemble.",
            directFlowUsed: "Débit direct utilisé ; le volume et les renouvellements d'air restent informatifs.",
            noHeatInput: "Aucun élément ni débit de ventilation introduit.",
            highVelocity: "Vitesse d'air élevée : vérifiez le bruit, la perte de charge et le confort.",
            highPriceSpread: "Écart de prix important : comparez hypothèses, exclusions et performances techniques.",
            lowAcoustic: "L'indication reste sous la valeur cible ; vérifiez la composition, les raccords et les transmissions latérales.",
            largeOpening: "Grande ouverture : définir tôt le concept structurel.",
            multipleFloors: "Plusieurs niveaux au-dessus : descente de charges et étaiement provisoire critiques.",
            largeSpan: "Grande portée : vérifier flèche et faisabilité.",
            newLoads: "Charges nouvelles ou accrues : réévaluer la structure existante.",
            ctaSubject: "Question sur les outils de calcul EA Suys",
            ctaBody: "Bonjour,\n\nJe souhaite discuter d'un projet sur base des outils de calcul en ligne.\n\nProjet :\n",
            mailFallback: "Si aucune fenêtre mail ne s'ouvre, envoyez un mail à info@easuys.be avec ce nom de projet et éventuellement l'entrée sauvegardée."
        }
    };

    const TOOL_TEXT = {
        conceptcheck: {
            title: {
                nl: "Gebouwtechnieken conceptcheck",
                en: "Building-services concept check",
                fr: "Concept techniques du bâtiment"
            },
            description: {
                nl: "Eerste conceptscreening voor ventilatie, verwarming, koeling, schachten, druk-/geluidsrisico en technische zones.",
                en: "First concept screening for ventilation, heating, cooling, shafts, pressure/noise risk and technical zones.",
                fr: "Premier screening conceptuel pour ventilation, chauffage, refroidissement, gaines, pression/bruit et zones techniques."
            }
        },
        projectIntake: {
            title: {
                nl: "Projectintake checklist",
                en: "Project intake checklist",
                fr: "Checklist intake projet"
            },
            description: {
                nl: "Upload-vrije checklist voor architecten: ontbrekende inputs, brand-/schachtinterfaces, onderhoudstoegang en gereedheid voor een quickscan.",
                en: "Upload-free architect checklist for missing inputs, fire/shaft interfaces, maintenance access and quickscan readiness.",
                fr: "Checklist sans upload pour architectes : données manquantes, interfaces feu/gaines, maintenance et préparation quickscan."
            }
        },
        grilleNoise: {
            title: {
                nl: "Rooster geluidsrisico",
                en: "Grille noise risk",
                fr: "Risque bruit grille"
            },
            description: {
                nl: "Snelle risico-inschatting voor rooster vrije doorlaat, frontsnelheid, drukverlies en kamergeluidsmarge.",
                en: "Quick risk screening for grille free area, face velocity, pressure drop and room noise margin.",
                fr: "Screening rapide de surface libre, vitesse frontale, perte de charge et marge acoustique local."
            }
        },
        plantFit: {
            title: {
                nl: "Technisch lokaal fit",
                en: "Plant room fit",
                fr: "Fit local technique"
            },
            description: {
                nl: "Controleer of toestellen met onderhoudszones indicatief in een technisch lokaal passen.",
                en: "Check whether equipment and service clearances indicatively fit inside a plant room.",
                fr: "Vérifie si les appareils et zones de maintenance tiennent indicativement dans un local technique."
            }
        },
        roofLoad: {
            title: {
                nl: "Daklasten technieken",
                en: "Roof plant loads",
                fr: "Charges toiture techniques"
            },
            description: {
                nl: "Checklist voor daktoestellen: steunoppervlak, indicatieve belasting, wind en coördinatiepunten.",
                en: "Checklist for roof plant: support area, indicative load, wind and coordination points.",
                fr: "Checklist pour équipements en toiture : appuis, charge indicative, vent et coordination."
            }
        },
        hvac: {
            title: {
                nl: "HVAC ruimtestaat",
                en: "HVAC room schedule",
                fr: "Tableau locaux HVAC"
            },
            description: {
                nl: "Detailwizard voor ruimtestaat, ventilatie, verwarming, koeling, luchtgroepen en cleanroomzones.",
                en: "Detailed wizard for room schedules, ventilation, heating, cooling, AHUs and cleanroom zones.",
                fr: "Assistant détaillé pour locaux, ventilation, chauffage, refroidissement, CTA et zones cleanroom."
            }
        },
        renovation: {
            title: {
                nl: "Renovatie quickscan",
                en: "Renovation quickscan",
                fr: "Quickscan rénovation"
            },
            description: {
                nl: "Eerste orde warmteverlies via bouwdelen en ventilatie, met marge voor renovatie-onzekerheid.",
                en: "First-order heat loss through building parts and ventilation, with a renovation uncertainty margin.",
                fr: "Première estimation des pertes par parois et ventilation, avec marge d'incertitude de rénovation."
            }
        },
        shafts: {
            title: {
                nl: "Ventilatie en technische kokers",
                en: "Ventilation and technical shafts",
                fr: "Ventilation et gaines techniques"
            },
            description: {
                nl: "Indicatieve kanaaldiameter, doorsnede en schachtruimte voor ventilatie en leidingen.",
                en: "Indicative duct diameter, section and shaft space for ventilation and pipework.",
                fr: "Diamètre, section et espace de gaine indicatifs pour ventilation et conduites."
            }
        },
        offer: {
            title: {
                nl: "Gebouwtechnieken offertecheck",
                en: "Building services tender check",
                fr: "Contrôle d'offres techniques"
            },
            description: {
                nl: "Controlelijst voor HVAC, sanitair en ventilatie: ontbrekende posten, uitvoerbaarheid en prijsverschil.",
                en: "Checklist for HVAC, sanitary and ventilation: missing items, buildability and price spread.",
                fr: "Liste de contrôle HVAC, sanitaire et ventilation : postes manquants, faisabilité et écart de prix."
            }
        },
        acoustics: {
            title: {
                nl: "Akoestiek renovatie",
                en: "Renovation acoustics",
                fr: "Acoustique en rénovation"
            },
            description: {
                nl: "Indicatieve massawet en marge voor flankerend geluid bij wanden, vloeren en installaties.",
                en: "Indicative mass law and flanking margin for walls, floors and technical installations.",
                fr: "Loi de masse indicative et marge de transmission latérale pour parois, planchers et installations."
            }
        },
        intake: {
            title: {
                nl: "Stabiliteit-renovatie intake",
                en: "Structural renovation intake",
                fr: "Intake stabilité-rénovation"
            },
            description: {
                nl: "Geen stabiliteitsberekening, wel een projectcheck voor doorbraken, bestaande structuren en ontbrekende stukken.",
                en: "Not a structural calculation, but a project check for openings, existing structures and missing documents.",
                fr: "Pas un calcul de stabilité, mais un contrôle de projet pour ouvertures, structures existantes et documents manquants."
            }
        }
    };

    const LABELS = {
        nl: {
            indoorTemp: "Binnentemperatuur",
            outdoorTemp: "Buitentemperatuur",
            renovationMargin: "Renovatiemarge",
            ventilationFlow: "Ventilatiedebiet",
            volume: "Volume",
            ach: "Luchtwissels",
            envelope: "Bouwdelen",
            ventilation: "Ventilatie",
            component: "Bouwdeel",
            uValue: "U-waarde",
            area: "Oppervlakte",
            loss: "Verlies",
            totalPower: "Indicatief verwarmingsvermogen",
            transmissionTotal: "Transmissieverlies",
            ventilationTotal: "Ventilatieverlies",
            marginValue: "Marge",
            airFlow: "Luchtdebiet",
            airSpeed: "Ontwerpsnelheid",
            ductCount: "Aantal luchtkanalen",
            insulation: "Isolatie rond kanaal",
            clearance: "Vrije speling",
            pipeWidth: "Leidingbundel breedte",
            pipeDepth: "Leidingbundel diepte",
            ductDiameter: "Rond kanaal",
            squareDuct: "Vierkante doorsnede",
            rectDuct: "Rechthoekig 2:1",
            shaftSize: "Indicatieve schachtmaat",
            offerPrices: "Offertebedragen",
            quoteA: "Offerte A",
            quoteB: "Offerte B",
            quoteC: "Offerte C",
            offerScore: "Dossierkwaliteit",
            priceSpread: "Prijsverschil",
            surfaceMass: "Oppervlaktemassa",
            frequency: "Frequentie",
            flankingMargin: "Marge flankerend geluid",
            acousticTarget: "Richtwaarde",
            massLaw: "Massawet",
            practicalIndex: "Praktische indicatie",
            targetDifference: "Verschil t.o.v. richtwaarde",
            openingWidth: "Breedte doorbraak",
            floorsAbove: "Bouwlagen erboven",
            span: "Overspanning",
            loadChange: "Nieuwe of hogere lasten",
            readiness: "Dossiergereedheid",
            attention: "Aandachtsniveau",
            buildingConditions: "Gebouwcondities",
            roomSchedule: "Ruimtestaat",
            indoorWinter: "Binnen winter",
            outdoorWinter: "Buiten winter",
            indoorSummer: "Binnen zomer",
            outdoorSummer: "Buiten zomer",
            heatRecovery: "Warmteterugwinning",
            ductVelocity: "Kanaalsnelheid",
            defaultUValue: "Gemiddelde U-waarde",
            pressureOffset: "Drukcascade marge",
            roomName: "Ruimte",
            roomType: "Type",
            height: "Hoogte",
            occupants: "Personen",
            exposedArea: "Verliesoppervlak",
            minAch: "Min. luchtwissels",
            pressureRole: "Drukrol",
            cleanroomClass: "Cleanroomklasse",
            supply: "Toevoer",
            extract: "Afvoer",
            outdoorAir: "Buitenlucht",
            heating: "Verwarming",
            cooling: "Koeling",
            ahuFlow: "Luchtgroepdebiet",
            productDirection: "Productrichting",
            sourceBasis: "Bronbasis",
            buildingType: "Gebouwtype",
            grossArea: "Bruto-oppervlakte",
            netArea: "Netto-oppervlakte",
            numberOfZones: "Aantal zones",
            workshopZones: "Atelier/proceszones",
            desiredComfort: "Comfortniveau",
            availableShaft: "Beschikbare schacht",
            shaftWidth: "Schachtbreedte",
            shaftDepth: "Schachtdiepte",
            plantRoom: "Technisch lokaal",
            plantRoomWidth: "Breedte lokaal",
            plantRoomLength: "Lengte lokaal",
            pressureRisk: "Drukrisico",
            missingInputs: "Ontbrekende invoer",
            recommendation: "Aanbeveling",
            conceptStatus: "Conceptstatus",
            ahuSplit: "Luchtgroepindeling",
            constraintCheck: "Constraintcheck",
            indoorWinterRh: "RV binnen winter",
            outdoorWinterRh: "RV buiten winter",
            indoorSummerRh: "RV binnen zomer",
            outdoorSummerRh: "RV buiten zomer",
            pressureDrop: "Drukverlies luchtgroep",
            cleanroomFilterPressure: "Cleanroom filterdruk",
            fanEfficiency: "Ventilatorrendement",
            cleanroomLeakage: "Cleanroom lekdebiet",
            fanPower: "Ventilatorvermogen",
            sfp: "SFP",
            humidification: "Bevochtiging",
            dehumidification: "Ontvochtiging",
            latentCooling: "Latente koeling",
            coolingInclFan: "Koeling incl. vocht/fan",
            leakage: "Lek/transfer",
            recirculation: "Recirculatie",
            outdoorAirFraction: "Aandeel buitenlucht",
            heatingCoil: "Batterij verwarming",
            coolingCoil: "Batterij koeling",
            condensate: "Condensaat",
            soundRisk: "Geluidsrisico",
            fanSound: "Ventilatorgeluid",
            pressureComponents: "Drukverliesopbouw",
            equipmentDirection: "Toestelrichting",
            role: "Rol",
            basis: "Basis",
            direction: "Richting",
            examples: "Voorbeelden",
            link: "Link",
            status: "Status",
            openLink: "Open fiche",
            grilleWidth: "Roosterbreedte",
            grilleHeight: "Roosterhoogte",
            freeAreaRatio: "Vrije doorlaat",
            freeArea: "Vrije oppervlakte",
            roomTarget: "Ruimterichtwaarde",
            roomAbsorption: "Ruimteabsorptie",
            distance: "Afstand",
            roomUse: "Ruimtegebruik",
            faceVelocity: "Frontsnelheid",
            terminalPressureDrop: "Roosterdrukverlies",
            estimatedSoundPower: "Geschat geluidvermogen",
            estimatedRoomLevel: "Geschat ruimteniveau",
            noiseMargin: "Geluidsmarge",
            manufacturerCheck: "Fabrikantcontrole",
            equipment: "Toestellen",
            equipmentLabel: "Toestel",
            equipmentWidth: "Toestelbreedte",
            equipmentLength: "Toestellengte",
            serviceFront: "Onderhoud vooraan",
            serviceSide: "Onderhoud zijkant",
            requiredServiceArea: "Benodigde servicezone",
            fitRatio: "Vullingsgraad",
            allowableLoad: "Toelaatbare daklast",
            windExposed: "Windblootstelling",
            equipmentWeight: "Gewicht toestel",
            supportArea: "Steunoppervlak",
            roofLoad: "Dakbelasting",
            totalWeight: "Totaal gewicht",
            checklist: "Checklist"
        },
        en: {
            indoorTemp: "Indoor temperature",
            outdoorTemp: "Outdoor temperature",
            renovationMargin: "Renovation margin",
            ventilationFlow: "Ventilation flow",
            volume: "Volume",
            ach: "Air changes",
            envelope: "Building parts",
            ventilation: "Ventilation",
            component: "Building part",
            uValue: "U-value",
            area: "Area",
            loss: "Loss",
            totalPower: "Indicative heating power",
            transmissionTotal: "Transmission loss",
            ventilationTotal: "Ventilation loss",
            marginValue: "Margin",
            airFlow: "Air flow",
            airSpeed: "Design velocity",
            ductCount: "Number of air ducts",
            insulation: "Duct insulation",
            clearance: "Free clearance",
            pipeWidth: "Pipe bundle width",
            pipeDepth: "Pipe bundle depth",
            ductDiameter: "Round duct",
            squareDuct: "Square section",
            rectDuct: "Rectangular 2:1",
            shaftSize: "Indicative shaft size",
            offerPrices: "Tender amounts",
            quoteA: "Tender A",
            quoteB: "Tender B",
            quoteC: "Tender C",
            offerScore: "File quality",
            priceSpread: "Price spread",
            surfaceMass: "Surface mass",
            frequency: "Frequency",
            flankingMargin: "Flanking margin",
            acousticTarget: "Target value",
            massLaw: "Mass law",
            practicalIndex: "Practical indication",
            targetDifference: "Difference to target",
            openingWidth: "Opening width",
            floorsAbove: "Floors above",
            span: "Span",
            loadChange: "New or higher loads",
            readiness: "File readiness",
            attention: "Attention level",
            buildingConditions: "Building conditions",
            roomSchedule: "Room schedule",
            indoorWinter: "Indoor winter",
            outdoorWinter: "Outdoor winter",
            indoorSummer: "Indoor summer",
            outdoorSummer: "Outdoor summer",
            heatRecovery: "Heat recovery",
            ductVelocity: "Duct velocity",
            defaultUValue: "Average U-value",
            pressureOffset: "Pressure cascade margin",
            roomName: "Room",
            roomType: "Type",
            height: "Height",
            occupants: "Occupants",
            exposedArea: "Exposed area",
            minAch: "Min. air changes",
            pressureRole: "Pressure role",
            cleanroomClass: "Cleanroom class",
            supply: "Supply",
            extract: "Extract",
            outdoorAir: "Outdoor air",
            heating: "Heating",
            cooling: "Cooling",
            ahuFlow: "AHU flow",
            productDirection: "Product direction",
            sourceBasis: "Source basis",
            buildingType: "Building type",
            grossArea: "Gross area",
            netArea: "Net area",
            numberOfZones: "Number of zones",
            workshopZones: "Workshop/process zones",
            desiredComfort: "Comfort level",
            availableShaft: "Available shaft",
            shaftWidth: "Shaft width",
            shaftDepth: "Shaft depth",
            plantRoom: "Plant room",
            plantRoomWidth: "Room width",
            plantRoomLength: "Room length",
            pressureRisk: "Pressure risk",
            missingInputs: "Missing input",
            recommendation: "Recommendation",
            conceptStatus: "Concept status",
            ahuSplit: "AHU split",
            constraintCheck: "Constraint check",
            indoorWinterRh: "Indoor RH winter",
            outdoorWinterRh: "Outdoor RH winter",
            indoorSummerRh: "Indoor RH summer",
            outdoorSummerRh: "Outdoor RH summer",
            pressureDrop: "AHU pressure drop",
            cleanroomFilterPressure: "Cleanroom filter drop",
            fanEfficiency: "Fan efficiency",
            cleanroomLeakage: "Cleanroom leakage",
            fanPower: "Fan power",
            sfp: "SFP",
            humidification: "Humidification",
            dehumidification: "Dehumidification",
            latentCooling: "Latent cooling",
            coolingInclFan: "Cooling incl. moisture/fan",
            leakage: "Leak/transfer",
            recirculation: "Recirculation",
            outdoorAirFraction: "Outdoor-air share",
            heatingCoil: "Heating coil",
            coolingCoil: "Cooling coil",
            condensate: "Condensate",
            soundRisk: "Sound risk",
            fanSound: "Fan sound",
            pressureComponents: "Pressure breakdown",
            equipmentDirection: "Equipment direction",
            role: "Role",
            basis: "Basis",
            direction: "Direction",
            examples: "Examples",
            link: "Link",
            status: "Status",
            openLink: "Open sheet",
            grilleWidth: "Grille width",
            grilleHeight: "Grille height",
            freeAreaRatio: "Free area ratio",
            freeArea: "Free area",
            roomTarget: "Room target",
            roomAbsorption: "Room absorption",
            distance: "Distance",
            roomUse: "Room use",
            faceVelocity: "Face velocity",
            terminalPressureDrop: "Grille pressure drop",
            estimatedSoundPower: "Estimated sound power",
            estimatedRoomLevel: "Estimated room level",
            noiseMargin: "Noise margin",
            manufacturerCheck: "Manufacturer check",
            equipment: "Equipment",
            equipmentLabel: "Equipment",
            equipmentWidth: "Equipment width",
            equipmentLength: "Equipment length",
            serviceFront: "Front service",
            serviceSide: "Side service",
            requiredServiceArea: "Required service area",
            fitRatio: "Fit ratio",
            allowableLoad: "Allowable roof load",
            windExposed: "Wind exposure",
            equipmentWeight: "Equipment weight",
            supportArea: "Support area",
            roofLoad: "Roof load",
            totalWeight: "Total weight",
            checklist: "Checklist"
        },
        fr: {
            indoorTemp: "Température intérieure",
            outdoorTemp: "Température extérieure",
            renovationMargin: "Marge rénovation",
            ventilationFlow: "Débit de ventilation",
            volume: "Volume",
            ach: "Renouvellements d'air",
            envelope: "Éléments",
            ventilation: "Ventilation",
            component: "Élément",
            uValue: "Valeur U",
            area: "Surface",
            loss: "Perte",
            totalPower: "Puissance de chauffage indicative",
            transmissionTotal: "Perte par transmission",
            ventilationTotal: "Perte par ventilation",
            marginValue: "Marge",
            airFlow: "Débit d'air",
            airSpeed: "Vitesse de calcul",
            ductCount: "Nombre de conduits",
            insulation: "Isolation du conduit",
            clearance: "Jeu libre",
            pipeWidth: "Largeur faisceau conduites",
            pipeDepth: "Profondeur faisceau conduites",
            ductDiameter: "Conduit rond",
            squareDuct: "Section carrée",
            rectDuct: "Rectangulaire 2:1",
            shaftSize: "Taille indicative de gaine",
            offerPrices: "Montants des offres",
            quoteA: "Offre A",
            quoteB: "Offre B",
            quoteC: "Offre C",
            offerScore: "Qualité du dossier",
            priceSpread: "Écart de prix",
            surfaceMass: "Masse surfacique",
            frequency: "Fréquence",
            flankingMargin: "Marge latérale",
            acousticTarget: "Valeur cible",
            massLaw: "Loi de masse",
            practicalIndex: "Indication pratique",
            targetDifference: "Écart par rapport à la cible",
            openingWidth: "Largeur d'ouverture",
            floorsAbove: "Niveaux au-dessus",
            span: "Portée",
            loadChange: "Charges nouvelles ou accrues",
            readiness: "Complétude du dossier",
            attention: "Niveau d'attention",
            buildingConditions: "Conditions bâtiment",
            roomSchedule: "Tableau des locaux",
            indoorWinter: "Intérieur hiver",
            outdoorWinter: "Extérieur hiver",
            indoorSummer: "Intérieur été",
            outdoorSummer: "Extérieur été",
            heatRecovery: "Récupération de chaleur",
            ductVelocity: "Vitesse gaine",
            defaultUValue: "Valeur U moyenne",
            pressureOffset: "Marge cascade pression",
            roomName: "Local",
            roomType: "Type",
            height: "Hauteur",
            occupants: "Occupants",
            exposedArea: "Surface déperditive",
            minAch: "Renouv. min.",
            pressureRole: "Rôle pression",
            cleanroomClass: "Classe cleanroom",
            supply: "Soufflage",
            extract: "Extraction",
            outdoorAir: "Air neuf",
            heating: "Chauffage",
            cooling: "Refroidissement",
            ahuFlow: "Débit CTA",
            productDirection: "Orientation produits",
            sourceBasis: "Base de sources",
            buildingType: "Type de bâtiment",
            grossArea: "Surface brute",
            netArea: "Surface nette",
            numberOfZones: "Nombre de zones",
            workshopZones: "Ateliers/process",
            desiredComfort: "Niveau de confort",
            availableShaft: "Gaine disponible",
            shaftWidth: "Largeur gaine",
            shaftDepth: "Profondeur gaine",
            plantRoom: "Local technique",
            plantRoomWidth: "Largeur local",
            plantRoomLength: "Longueur local",
            pressureRisk: "Risque pression",
            missingInputs: "Entrées manquantes",
            recommendation: "Recommandation",
            conceptStatus: "Statut concept",
            ahuSplit: "Répartition CTA",
            constraintCheck: "Contrôle contraintes",
            indoorWinterRh: "HR intérieur hiver",
            outdoorWinterRh: "HR extérieur hiver",
            indoorSummerRh: "HR intérieur été",
            outdoorSummerRh: "HR extérieur été",
            pressureDrop: "Perte de charge CTA",
            cleanroomFilterPressure: "Perte filtre cleanroom",
            fanEfficiency: "Rendement ventilateur",
            cleanroomLeakage: "Fuite cleanroom",
            fanPower: "Puissance ventilateur",
            sfp: "SFP",
            humidification: "Humidification",
            dehumidification: "Déshumidification",
            latentCooling: "Froid latent",
            coolingInclFan: "Froid incl. humidité/vent.",
            leakage: "Fuite/transfert",
            recirculation: "Recirculation",
            outdoorAirFraction: "Part d'air neuf",
            heatingCoil: "Batterie chaude",
            coolingCoil: "Batterie froide",
            condensate: "Condensats",
            soundRisk: "Risque acoustique",
            fanSound: "Bruit ventilateur",
            pressureComponents: "Pertes de charge",
            equipmentDirection: "Orientation appareils",
            role: "Rôle",
            basis: "Base",
            direction: "Orientation",
            examples: "Exemples",
            link: "Lien",
            status: "Statut",
            openLink: "Ouvrir fiche",
            grilleWidth: "Largeur grille",
            grilleHeight: "Hauteur grille",
            freeAreaRatio: "Taux surface libre",
            freeArea: "Surface libre",
            roomTarget: "Objectif local",
            roomAbsorption: "Absorption local",
            distance: "Distance",
            roomUse: "Usage local",
            faceVelocity: "Vitesse frontale",
            terminalPressureDrop: "Perte grille",
            estimatedSoundPower: "Puissance sonore estimée",
            estimatedRoomLevel: "Niveau local estimé",
            noiseMargin: "Marge acoustique",
            manufacturerCheck: "Contrôle fabricant",
            equipment: "Appareils",
            equipmentLabel: "Appareil",
            equipmentWidth: "Largeur appareil",
            equipmentLength: "Longueur appareil",
            serviceFront: "Maintenance avant",
            serviceSide: "Maintenance côté",
            requiredServiceArea: "Zone maintenance requise",
            fitRatio: "Taux occupation",
            allowableLoad: "Charge toiture admissible",
            windExposed: "Exposition vent",
            equipmentWeight: "Poids appareil",
            supportArea: "Surface d'appui",
            roofLoad: "Charge toiture",
            totalWeight: "Poids total",
            checklist: "Checklist"
        }
    };

    const DEFAULTS = {
        conceptcheck: {
            projectName: "Gebouwtechnieken conceptcheck",
            buildingType: "school",
            grossAreaM2: 650,
            netAreaM2: 520,
            numberOfZones: 5,
            occupancy: 75,
            workshopProcessZones: true,
            ventilationTargetAch: 3,
            indoorWinterTemp: 20,
            outdoorWinterTemp: -8,
            indoorSummerTemp: 26,
            outdoorSummerTemp: 32,
            desiredComfortLevel: "standard",
            availableShaftWidthMm: 900,
            availableShaftDepthMm: 700,
            plantRoomWidthM: 4,
            plantRoomLengthM: 5
        },
        projectIntake: {
            projectName: "Projectintake",
            buildingType: "school",
            projectPhase: "concept",
            publicBuilding: true,
            renovation: true,
            cleanZones: false,
            workshopProcessZones: true,
            roofPlant: true,
            plantRoom: true,
            hvacScope: true,
            sanitaryScope: true,
            electricalScope: true,
            structuralChanges: true,
            fireCompartmentChanges: true,
            acousticSensitive: true,
            existingPlans: true,
            measuredPlans: false,
            photos: false,
            roomList: true,
            occupancySchedule: false,
            ventilationConcept: false,
            shaftZones: false,
            plantRoomDimensions: false,
            roofStructureInfo: false,
            fireCompartments: false,
            maintenanceAccess: false,
            electricalCapacity: false,
            drainageRoutes: false,
            noiseTargets: false,
            asbestosSurvey: false,
            budgetRange: false,
            targetDate: false,
            publicTenderRequirements: false
        },
        grilleNoise: {
            projectName: "Rooster quickscan",
            roomType: "classroom",
            airflowM3H: 650,
            grilleWidthMm: 500,
            grilleHeightMm: 150,
            freeAreaRatio: 0.55,
            pressureDropPa: 55,
            roomTargetDbA: 35,
            distanceM: 2.5,
            roomAbsorptionM2: 12
        },
        plantFit: {
            projectName: "Technisch lokaal",
            roomWidthM: 4,
            roomLengthM: 5,
            equipment1Label: "Luchtgroep",
            equipment1WidthM: 1.2,
            equipment1LengthM: 2.8,
            equipment1ServiceFrontM: 1,
            equipment1ServiceSideM: 0.5,
            equipment2Label: "Warmtepomp",
            equipment2WidthM: 0.9,
            equipment2LengthM: 1.4,
            equipment2ServiceFrontM: 0.8,
            equipment2ServiceSideM: 0.4,
            equipment3Label: "Boiler",
            equipment3WidthM: 0.8,
            equipment3LengthM: 0.8,
            equipment3ServiceFrontM: 0.7,
            equipment3ServiceSideM: 0.3,
            equipment4Label: "",
            equipment4WidthM: "",
            equipment4LengthM: "",
            equipment4ServiceFrontM: 0.8,
            equipment4ServiceSideM: 0.4
        },
        roofLoad: {
            projectName: "Daktoestellen",
            allowableLoadKgM2: 150,
            windExposed: true,
            roofEquipment1Label: "Warmtepomp",
            roofEquipment1WeightKg: 420,
            roofEquipment1SupportAreaM2: 2.4,
            roofEquipment2Label: "Luchtgroep",
            roofEquipment2WeightKg: 950,
            roofEquipment2SupportAreaM2: 6.5,
            roofEquipment3Label: "",
            roofEquipment3WeightKg: "",
            roofEquipment3SupportAreaM2: ""
        },
        hvac: {
            projectName: "Concept",
            indoorWinterTemp: 20,
            outdoorWinterTemp: -8,
            indoorSummerTemp: 26,
            outdoorSummerTemp: 32,
            indoorWinterRh: 45,
            outdoorWinterRh: 86,
            indoorSummerRh: 50,
            outdoorSummerRh: 35,
            heatRecoveryPercent: 75,
            marginPercent: 15,
            ductVelocityMS: 4,
            defaultUValue: 0.45,
            pressureOffsetPercent: 8,
            pressureDropPa: 700,
            cleanroomFilterPressurePa: 300,
            fanEfficiencyPercent: 60,
            cleanroomLeakagePercent: 7,
            room1Name: "Leslokaal",
            room1Type: "classroom",
            room1Area: 60,
            room1Height: 3.2,
            room1Occupants: 24,
            room1Exposed: 45,
            room1Ach: "",
            room1Pressure: "neutral",
            room1CleanroomClass: "",
            room2Name: "Atelier",
            room2Type: "workshop",
            room2Area: 120,
            room2Height: 4,
            room2Occupants: 8,
            room2Exposed: 90,
            room2Ach: "",
            room2Pressure: "negative",
            room2CleanroomClass: "",
            room3Name: "Cleanroom zone",
            room3Type: "cleanroom",
            room3Area: 35,
            room3Height: 3,
            room3Occupants: 3,
            room3Exposed: 25,
            room3Ach: 25,
            room3Pressure: "positive",
            room3CleanroomClass: "ISO 7",
            room4Name: "Sanitair",
            room4Type: "sanitary",
            room4Area: 20,
            room4Height: 3,
            room4Occupants: 0,
            room4Exposed: 8,
            room4Ach: "",
            room4Pressure: "negative",
            room4CleanroomClass: "",
            room5Name: "Technische ruimte",
            room5Type: "technical",
            room5Area: 30,
            room5Height: 3,
            room5Occupants: 0,
            room5Exposed: 12,
            room5Ach: "",
            room5Pressure: "negative",
            room5CleanroomClass: "",
            room6Name: "",
            room6Type: "office",
            room6Area: "",
            room6Height: 3,
            room6Occupants: "",
            room6Exposed: "",
            room6Ach: "",
            room6Pressure: "neutral",
            room6CleanroomClass: ""
        },
        renovation: {
            projectName: "",
            indoorTemp: 20,
            outdoorTemp: -8,
            renovationMargin: 15,
            ventilationFlow: 150,
            volume: "",
            ach: "",
            component1Label: "Buitenmuren",
            component1U: 0.7,
            component1Area: 85,
            component2Label: "Dak",
            component2U: 0.24,
            component2Area: 65,
            component3Label: "Vloer",
            component3U: 0.35,
            component3Area: 55,
            component4Label: "Ramen en deuren",
            component4U: 1.6,
            component4Area: 22,
            component5Label: "Overige",
            component5U: "",
            component5Area: ""
        },
        shafts: {
            projectName: "",
            airFlow: 360,
            airSpeed: 3,
            ductCount: 1,
            insulation: 25,
            clearance: 40,
            pipeWidth: 0,
            pipeDepth: 0
        },
        offer: {
            projectName: "",
            quoteA: "",
            quoteB: "",
            quoteC: "",
            heatLoss: true,
            ventilationFlows: true,
            hydraulicScheme: false,
            sanitarySizing: false,
            electricalPower: false,
            shaftCoordination: true,
            maintenanceAccess: true,
            acousticMeasures: false,
            commissioning: false,
            exclusions: false,
            phasing: false,
            alternatives: false
        },
        acoustics: {
            projectName: "",
            surfaceMass: 250,
            frequency: 500,
            flankingMargin: 5,
            acousticTarget: 54
        },
        intake: {
            projectName: "",
            openingWidth: 2.4,
            floorsAbove: 1,
            span: 4,
            loadChange: false,
            existingPlans: false,
            photos: true,
            dimensions: true,
            materialInfo: false,
            foundationInfo: false,
            loadInfo: false,
            siteAccess: true,
            executionPhasing: false
        }
    };

    const COMPONENT_LABELS = {
        nl: ["Buitenmuren", "Dak", "Vloer", "Ramen en deuren", "Overige"],
        en: ["External walls", "Roof", "Floor", "Windows and doors", "Other"],
        fr: ["Murs extérieurs", "Toiture", "Plancher", "Fenêtres et portes", "Autre"]
    };

    const OFFER_ITEMS = [
        ["heatLoss", { nl: "Warmteverlies of vermogensbasis opgenomen", en: "Heat loss or power basis included", fr: "Pertes de chaleur ou base de puissance incluses" }, true],
        ["ventilationFlows", { nl: "Ventilatiedebieten per ruimte vermeld", en: "Ventilation flows listed per room", fr: "Débits de ventilation indiqués par local" }, true],
        ["hydraulicScheme", { nl: "Hydraulisch schema of principes duidelijk", en: "Hydraulic scheme or principles clear", fr: "Schéma hydraulique ou principes clairs" }, true],
        ["sanitarySizing", { nl: "Sanitair en warmwaterdimensionering onderbouwd", en: "Sanitary and hot-water sizing substantiated", fr: "Dimensionnement sanitaire et ECS justifié" }, false],
        ["electricalPower", { nl: "Elektrische vermogens en voedingen afgestemd", en: "Electrical power and feeds coordinated", fr: "Puissances et alimentations électriques coordonnées" }, false],
        ["shaftCoordination", { nl: "Technische kokers en doorvoeren afgestemd", en: "Technical shafts and penetrations coordinated", fr: "Gaines techniques et percements coordonnés" }, true],
        ["maintenanceAccess", { nl: "Onderhoud en toegankelijkheid beschreven", en: "Maintenance and accessibility described", fr: "Maintenance et accessibilité décrites" }, false],
        ["acousticMeasures", { nl: "Akoestische aandachtspunten opgenomen", en: "Acoustic attention points included", fr: "Points acoustiques inclus" }, false],
        ["commissioning", { nl: "Inregeling, keuringen en oplevering vermeld", en: "Balancing, inspections and handover listed", fr: "Réglage, contrôles et réception mentionnés" }, false],
        ["exclusions", { nl: "Uitsluitingen en aannames expliciet", en: "Exclusions and assumptions explicit", fr: "Exclusions et hypothèses explicites" }, true],
        ["phasing", { nl: "Fasering en werken in bestaande toestand beschreven", en: "Phasing and works in existing condition described", fr: "Phasage et travaux en site existant décrits" }, false],
        ["alternatives", { nl: "Alternatieven gelijkwaardig vergelijkbaar", en: "Alternatives comparable on equal basis", fr: "Alternatives comparables sur base équivalente" }, false]
    ];

    const INTAKE_ITEMS = [
        ["existingPlans", { nl: "Bestaande plannen beschikbaar", en: "Existing plans available", fr: "Plans existants disponibles" }],
        ["photos", { nl: "Foto's van de bestaande toestand", en: "Photos of existing condition", fr: "Photos de la situation existante" }],
        ["dimensions", { nl: "Maten en niveaus opgemeten", en: "Dimensions and levels measured", fr: "Dimensions et niveaux relevés" }],
        ["materialInfo", { nl: "Materiaalinfo of sonderingen", en: "Material information or probes", fr: "Information matériaux ou sondages" }],
        ["foundationInfo", { nl: "Funderingsinfo", en: "Foundation information", fr: "Information fondations" }],
        ["loadInfo", { nl: "Nieuwe lasten en gebruik duidelijk", en: "New loads and use clear", fr: "Nouvelles charges et usage clairs" }],
        ["siteAccess", { nl: "Toegang en uitvoerbaarheid gekend", en: "Access and buildability known", fr: "Accès et faisabilité connus" }],
        ["executionPhasing", { nl: "Fasering en tijdelijke steun bekeken", en: "Phasing and temporary support considered", fr: "Phasage et étaiement provisoire examinés" }]
    ];

    const PROJECT_PHASES = [
        ["concept", { nl: "Concept", en: "Concept", fr: "Concept" }],
        ["tender", { nl: "Offerte/aanbesteding", en: "Tender", fr: "Appel d'offres" }],
        ["execution", { nl: "Uitvoering", en: "Execution", fr: "Exécution" }]
    ];

    const PROJECT_INTAKE_FLAGS = [
        ["publicBuilding", { nl: "Publiek gebouw", en: "Public building", fr: "Bâtiment public" }],
        ["renovation", { nl: "Renovatie", en: "Renovation", fr: "Rénovation" }],
        ["workshopProcessZones", { nl: "Atelier/proceszones", en: "Workshop/process zones", fr: "Atelier/zones process" }],
        ["cleanZones", { nl: "Cleanroom/clean-zone", en: "Cleanroom/clean zone", fr: "Cleanroom/zone propre" }],
        ["roofPlant", { nl: "Dakinstallaties", en: "Roof plant", fr: "Installations en toiture" }],
        ["plantRoom", { nl: "Technisch lokaal", en: "Plant room", fr: "Local technique" }],
        ["structuralChanges", { nl: "Stabiliteitsingrepen", en: "Structural changes", fr: "Interventions stabilité" }],
        ["fireCompartmentChanges", { nl: "Brandcompartimentering wijzigt", en: "Fire compartments change", fr: "Compartimentage feu modifié" }],
        ["acousticSensitive", { nl: "Akoestisch gevoelig", en: "Acoustically sensitive", fr: "Sensible acoustiquement" }]
    ];

    const PROJECT_INTAKE_ITEMS = [
        ["existingPlans", { nl: "Bestaande plannen of meetbasis", en: "Existing plans or survey basis", fr: "Plans existants ou base de relevé" }],
        ["measuredPlans", { nl: "Opgemeten/as-built controle", en: "Measured/as-built check", fr: "Contrôle relevé/as-built" }],
        ["roomList", { nl: "Ruimtelijst met functie en oppervlakte", en: "Room list with function and area", fr: "Liste locaux avec fonction et surface" }],
        ["occupancySchedule", { nl: "Bezetting en bedrijfsuren", en: "Occupancy and schedule", fr: "Occupation et horaires" }],
        ["ventilationConcept", { nl: "Ventilatie- en drukconcept", en: "Ventilation and pressure concept", fr: "Concept ventilation et pression" }],
        ["shaftZones", { nl: "Schachtzones en plafondroutes", en: "Shaft zones and ceiling routes", fr: "Gaines et cheminements plafond" }],
        ["plantRoomDimensions", { nl: "Afmetingen technisch lokaal", en: "Plant-room dimensions", fr: "Dimensions local technique" }],
        ["roofStructureInfo", { nl: "Dakstructuur en lastreserve", en: "Roof structure and load allowance", fr: "Structure toiture et réserve de charge" }],
        ["fireCompartments", { nl: "Brandcompartimenten en doorvoeren", en: "Fire compartments and penetrations", fr: "Compartiments feu et traversées" }],
        ["maintenanceAccess", { nl: "Onderhouds- en vervangtoegang", en: "Maintenance and replacement access", fr: "Accès maintenance/remplacement" }],
        ["electricalCapacity", { nl: "Elektrisch vermogen en interfaces", en: "Electrical capacity and interfaces", fr: "Puissance électrique et interfaces" }],
        ["drainageRoutes", { nl: "Afvoer/condensaatroutes", en: "Drainage/condensate routes", fr: "Évacuation/condensats" }],
        ["noiseTargets", { nl: "Geluidscriteria en buren", en: "Noise targets and adjacencies", fr: "Critères bruit et voisinage" }],
        ["asbestosSurvey", { nl: "Asbest-/gevaarlijke stoffenstatus", en: "Asbestos/hazard status", fr: "Statut amiante/dangers" }],
        ["budgetRange", { nl: "Budgetorde of kostengevoeligheid", en: "Budget range or cost sensitivity", fr: "Budget ou sensibilité coût" }],
        ["targetDate", { nl: "Beslissings- of aanbestedingsdatum", en: "Decision or tender date", fr: "Date décision/appel d'offres" }],
        ["publicTenderRequirements", { nl: "Aanbestedingsvereisten", en: "Tender requirements", fr: "Exigences marché public" }]
    ];

    const HVAC_ROOM_TYPES = [
        ["office", { nl: "Kantoor", en: "Office", fr: "Bureau" }],
        ["classroom", { nl: "Leslokaal", en: "Classroom", fr: "Salle de cours" }],
        ["workshop", { nl: "Atelier", en: "Workshop", fr: "Atelier" }],
        ["multipurpose", { nl: "Polyvalente ruimte", en: "Multipurpose", fr: "Polyvalent" }],
        ["sanitary", { nl: "Sanitair", en: "Sanitary", fr: "Sanitaire" }],
        ["storage", { nl: "Berging", en: "Storage", fr: "Stockage" }],
        ["technical", { nl: "Technische ruimte", en: "Technical room", fr: "Local technique" }],
        ["cleanroom", { nl: "Cleanroom", en: "Cleanroom", fr: "Cleanroom" }]
    ];

    const HVAC_PRESSURE_ROLES = [
        ["neutral", { nl: "Neutraal", en: "Neutral", fr: "Neutre" }],
        ["positive", { nl: "Overdruk", en: "Positive", fr: "Surpression" }],
        ["negative", { nl: "Onderdruk", en: "Negative", fr: "Dépression" }]
    ];

    const BUILDING_TYPES = [
        ["school", { nl: "School / publiek gebouw", en: "School / public building", fr: "École / bâtiment public" }],
        ["training_center", { nl: "Opleidingscentrum", en: "Training center", fr: "Centre de formation" }],
        ["office", { nl: "Kantoor", en: "Office", fr: "Bureau" }],
        ["sports_public", { nl: "Sport / sanitair publiek", en: "Sports / sanitary public", fr: "Sport / sanitaires public" }],
        ["renovation_mixed", { nl: "Gemengde renovatie", en: "Mixed renovation", fr: "Rénovation mixte" }]
    ];

    const COMFORT_LEVELS = [
        ["basic", { nl: "Basis", en: "Basic", fr: "Base" }],
        ["standard", { nl: "Standaard", en: "Standard", fr: "Standard" }],
        ["high", { nl: "Hoog comfort", en: "High comfort", fr: "Confort élevé" }]
    ];

    class CalculationError extends Error {
        constructor(messages) {
            super(messages.join("; "));
            this.messages = messages;
        }
    }

    const API_BASE_URL = "https://easuys-tools-api.yellow-violet-f185.workers.dev";
    const API_ENDPOINTS = {
        conceptcheck: "/calculate/building-tech-conceptcheck",
        projectIntake: "/calculate/project-intake-checklist",
        grilleNoise: "/calculate/grille-noise-risk",
        plantFit: "/calculate/plant-room-clearance",
        roofLoad: "/calculate/roof-plant-interface",
        hvac: "/calculate/hvac-building",
        renovation: "/calculate/renovation",
        shafts: "/calculate/shaft",
        offer: "/calculate/offer",
        acoustics: "/calculate/acoustics",
        intake: "/calculate/intake"
    };
    const REPORT_ENDPOINTS = {
        conceptcheck: "/report/conceptcheck"
    };

    const toNumber = (value) => {
        if (value === null || value === undefined || value === "") return null;
        const normalized = String(value).trim().replace(",", ".");
        if (normalized === "") return null;
        const parsed = Number(normalized);
        return Number.isFinite(parsed) ? parsed : NaN;
    };

    const requireNumber = (value, label, options = {}) => {
        const parsed = toNumber(value);
        const errors = [];
        if (parsed === null || Number.isNaN(parsed)) {
            errors.push(`${label}: ${options.requiredMessage || "required number"}`);
        } else {
            if (options.min !== undefined && parsed < options.min) errors.push(`${label}: min ${options.min}`);
            if (options.max !== undefined && parsed > options.max) errors.push(`${label}: max ${options.max}`);
        }
        if (errors.length) throw new CalculationError(errors);
        return parsed;
    };

    const optionalNumber = (value, label, options = {}) => {
        const parsed = toNumber(value);
        if (parsed === null) return null;
        if (Number.isNaN(parsed)) throw new CalculationError([`${label}: invalid number`]);
        if (options.min !== undefined && parsed < options.min) throw new CalculationError([`${label}: min ${options.min}`]);
        if (options.max !== undefined && parsed > options.max) throw new CalculationError([`${label}: max ${options.max}`]);
        return parsed;
    };

    const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&#039;"
    }[char]));

    const textFor = (dict, lang) => dict[lang] || dict.nl || "";

    const optionLabel = (options, value, lang) => {
        const found = options.find(([key]) => key === value);
        return found ? textFor(found[1], lang) : value;
    };

    const soundLevelLabel = (level, lang) => {
        const levels = {
            nl: { laag: "laag", matig: "matig", hoog: "hoog" },
            en: { laag: "low", matig: "medium", hoog: "high" },
            fr: { laag: "faible", matig: "moyen", hoog: "élevé" }
        };
        return (levels[lang] || levels.nl)[level] || level || "-";
    };

    const riskLevelLabel = (level, lang) => {
        const levels = {
            nl: { low: "laag", medium: "matig", high: "hoog", fits_indicatively: "past indicatief", too_small: "te klein", coordination_required: "coördinatie nodig" },
            en: { low: "low", medium: "medium", high: "high", fits_indicatively: "fits indicatively", too_small: "too small", coordination_required: "coordination required" },
            fr: { low: "faible", medium: "moyen", high: "élevé", fits_indicatively: "convient indicativement", too_small: "trop petit", coordination_required: "coordination requise" }
        };
        return (levels[lang] || levels.nl)[level] || level || "-";
    };

    const appState = {
        lang: "nl",
        activeTool: "renovation",
        message: "",
        lastReportPayload: null
    };

    const formatNumber = (value, lang = "nl", decimals = 1) => {
        if (!Number.isFinite(value)) return "-";
        return new Intl.NumberFormat(LANGS[lang].locale, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        }).format(value);
    };

    const formatValue = (value, unit, lang = "nl", decimals = 1) => `${formatNumber(value, lang, decimals)} ${unit}`;

    const input = (field, label, unit, value, attrs = {}) => {
        const step = attrs.step || "any";
        const type = attrs.type || "number";
        const inputMode = type === "number" ? "decimal" : "text";
        return `
            <label class="tool-field">
                <span>${escapeHtml(label)}</span>
                <input type="${type}" inputmode="${inputMode}" data-field="${field}" value="${escapeHtml(value ?? "")}" step="${step}" ${attrs.min !== undefined ? `min="${attrs.min}"` : ""} ${attrs.max !== undefined ? `max="${attrs.max}"` : ""}>
                ${unit ? `<em>${escapeHtml(unit)}</em>` : ""}
            </label>
        `;
    };

    const selectInput = (field, label, value, options, lang) => `
        <label class="tool-field">
            <span>${escapeHtml(label)}</span>
            <select data-field="${field}">
                ${options.map(([optionValue, labels]) => `
                    <option value="${escapeHtml(optionValue)}" ${optionValue === value ? "selected" : ""}>${escapeHtml(textFor(labels, lang))}</option>
                `).join("")}
            </select>
        </label>
    `;

    const checkbox = (field, label, checked) => `
        <label class="tool-check">
            <input type="checkbox" data-field="${field}" ${checked ? "checked" : ""}>
            <span>${escapeHtml(label)}</span>
        </label>
    `;

    const currentToolDefaults = (toolId) => ({ ...DEFAULTS[toolId] });

    const getFormState = () => {
        const state = {};
        document.querySelectorAll("[data-field]").forEach((element) => {
            state[element.dataset.field] = element.type === "checkbox" ? element.checked : element.value;
        });
        return state;
    };

    const setFormState = (state) => {
        document.querySelectorAll("[data-field]").forEach((element) => {
            if (Object.prototype.hasOwnProperty.call(state, element.dataset.field)) {
                if (element.type === "checkbox") {
                    element.checked = Boolean(state[element.dataset.field]);
                } else {
                    element.value = state[element.dataset.field] ?? "";
                }
            }
        });
    };

    const renderComponentTable = (defaults, lang) => {
        const l = LABELS[lang];
        const translatedDefaults = COMPONENT_LABELS[lang];
        let rows = "";
        for (let index = 1; index <= 5; index += 1) {
            const defaultLabel = index <= 5 ? translatedDefaults[index - 1] : "";
            const labelValue = lang === "nl" ? (defaults[`component${index}Label`] || defaultLabel) : defaultLabel;
            rows += `
                <tr>
                    <td><input type="text" data-field="component${index}Label" value="${escapeHtml(labelValue)}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="component${index}U" value="${escapeHtml(defaults[`component${index}U`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="component${index}Area" value="${escapeHtml(defaults[`component${index}Area`])}"></td>
                </tr>
            `;
        }
        return `
            <div class="table-scroll">
                <table class="tool-input-table">
                    <thead>
                        <tr><th>${escapeHtml(l.component)}</th><th>${escapeHtml(l.uValue)} W/m²K</th><th>${escapeHtml(l.area)} m²</th></tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    };

    const renderRenovationForm = (lang) => {
        const d = currentToolDefaults("renovation");
        const l = LABELS[lang];
        return `
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("indoorTemp", l.indoorTemp, "°C", d.indoorTemp)}
                ${input("outdoorTemp", l.outdoorTemp, "°C", d.outdoorTemp)}
                ${input("renovationMargin", l.renovationMargin, "%", d.renovationMargin, { min: 0, max: 100 })}
            </div>
            <h3>${escapeHtml(l.envelope)}</h3>
            ${renderComponentTable(d, lang)}
            <h3>${escapeHtml(l.ventilation)}</h3>
            <div class="tool-form-grid">
                ${input("ventilationFlow", l.ventilationFlow, "m³/h", d.ventilationFlow, { min: 0 })}
                ${input("volume", l.volume, "m³", d.volume, { min: 0 })}
                ${input("ach", l.ach, "1/h", d.ach, { min: 0 })}
            </div>
        `;
    };

    const renderHvacRoomRows = (defaults, lang) => {
        const l = LABELS[lang];
        let rows = "";
        for (let index = 1; index <= 6; index += 1) {
            rows += `
                <tr>
                    <td><input type="text" data-field="room${index}Name" value="${escapeHtml(defaults[`room${index}Name`])}"></td>
                    <td>
                        <select data-field="room${index}Type">
                            ${HVAC_ROOM_TYPES.map(([value, labels]) => `<option value="${escapeHtml(value)}" ${defaults[`room${index}Type`] === value ? "selected" : ""}>${escapeHtml(textFor(labels, lang))}</option>`).join("")}
                        </select>
                    </td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="room${index}Area" value="${escapeHtml(defaults[`room${index}Area`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="2" data-field="room${index}Height" value="${escapeHtml(defaults[`room${index}Height`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="room${index}Occupants" value="${escapeHtml(defaults[`room${index}Occupants`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="room${index}Exposed" value="${escapeHtml(defaults[`room${index}Exposed`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="room${index}Ach" value="${escapeHtml(defaults[`room${index}Ach`])}"></td>
                    <td>
                        <select data-field="room${index}Pressure">
                            ${HVAC_PRESSURE_ROLES.map(([value, labels]) => `<option value="${escapeHtml(value)}" ${defaults[`room${index}Pressure`] === value ? "selected" : ""}>${escapeHtml(textFor(labels, lang))}</option>`).join("")}
                        </select>
                    </td>
                    <td><input type="text" data-field="room${index}CleanroomClass" value="${escapeHtml(defaults[`room${index}CleanroomClass`])}"></td>
                </tr>
            `;
        }
        return `
            <div class="table-scroll">
                <table class="tool-input-table hvac-room-table">
                    <thead>
                        <tr>
                            <th>${escapeHtml(l.roomName)}</th>
                            <th>${escapeHtml(l.roomType)}</th>
                            <th>${escapeHtml(l.area)} m²</th>
                            <th>${escapeHtml(l.height)} m</th>
                            <th>${escapeHtml(l.occupants)}</th>
                            <th>${escapeHtml(l.exposedArea)} m²</th>
                            <th>${escapeHtml(l.minAch)}</th>
                            <th>${escapeHtml(l.pressureRole)}</th>
                            <th>${escapeHtml(l.cleanroomClass)}</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    };

    const renderConceptcheckForm = (lang) => {
        const d = currentToolDefaults("conceptcheck");
        const l = LABELS[lang];
        return `
            <h3>${escapeHtml(l.buildingConditions)}</h3>
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${selectInput("buildingType", l.buildingType, d.buildingType, BUILDING_TYPES, lang)}
                ${input("grossAreaM2", l.grossArea, "m²", d.grossAreaM2, { min: 1 })}
                ${input("netAreaM2", l.netArea, "m²", d.netAreaM2, { min: 1 })}
                ${input("numberOfZones", l.numberOfZones, "", d.numberOfZones, { min: 1, step: 1 })}
                ${input("occupancy", l.occupants, "", d.occupancy, { min: 0 })}
                ${input("ventilationTargetAch", l.ach, "1/h", d.ventilationTargetAch, { min: 0 })}
                ${selectInput("desiredComfortLevel", l.desiredComfort, d.desiredComfortLevel, COMFORT_LEVELS, lang)}
            </div>
            <div class="tool-check-grid">${checkbox("workshopProcessZones", l.workshopZones, d.workshopProcessZones)}</div>
            <h3>${escapeHtml(l.heating)} / ${escapeHtml(l.cooling)}</h3>
            <div class="tool-form-grid">
                ${input("indoorWinterTemp", l.indoorWinter, "°C", d.indoorWinterTemp)}
                ${input("outdoorWinterTemp", l.outdoorWinter, "°C", d.outdoorWinterTemp)}
                ${input("indoorSummerTemp", l.indoorSummer, "°C", d.indoorSummerTemp)}
                ${input("outdoorSummerTemp", l.outdoorSummer, "°C", d.outdoorSummerTemp)}
            </div>
            <h3>${escapeHtml(l.availableShaft)}</h3>
            <div class="tool-form-grid">
                ${input("availableShaftWidthMm", l.shaftWidth, "mm", d.availableShaftWidthMm, { min: 0 })}
                ${input("availableShaftDepthMm", l.shaftDepth, "mm", d.availableShaftDepthMm, { min: 0 })}
            </div>
            <h3>${escapeHtml(l.plantRoom)}</h3>
            <div class="tool-form-grid">
                ${input("plantRoomWidthM", l.plantRoomWidth, "m", d.plantRoomWidthM, { min: 0 })}
                ${input("plantRoomLengthM", l.plantRoomLength, "m", d.plantRoomLengthM, { min: 0 })}
            </div>
        `;
    };

    const renderProjectIntakeForm = (lang) => {
        const d = currentToolDefaults("projectIntake");
        const l = LABELS[lang];
        const flags = PROJECT_INTAKE_FLAGS.map(([field, labels]) => checkbox(field, textFor(labels, lang), d[field])).join("");
        const checks = PROJECT_INTAKE_ITEMS.map(([field, labels]) => checkbox(field, textFor(labels, lang), d[field])).join("");
        return `
            <h3>${escapeHtml(l.buildingConditions)}</h3>
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${selectInput("buildingType", l.buildingType, d.buildingType, BUILDING_TYPES, lang)}
                ${selectInput("projectPhase", l.status, d.projectPhase, PROJECT_PHASES, lang)}
            </div>
            <h3>${escapeHtml(l.attention)}</h3>
            <div class="tool-check-grid">${flags}</div>
            <h3>${escapeHtml(l.missingInputs)}</h3>
            <div class="tool-check-grid">${checks}</div>
        `;
    };

    const renderGrilleNoiseForm = (lang) => {
        const d = currentToolDefaults("grilleNoise");
        const l = LABELS[lang];
        return `
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("roomType", l.roomUse, "", d.roomType, { type: "text" })}
                ${input("airflowM3H", l.airFlow, "m³/h", d.airflowM3H, { min: 0 })}
                ${input("grilleWidthMm", l.grilleWidth, "mm", d.grilleWidthMm, { min: 1 })}
                ${input("grilleHeightMm", l.grilleHeight, "mm", d.grilleHeightMm, { min: 1 })}
                ${input("freeAreaRatio", l.freeAreaRatio, "", d.freeAreaRatio, { min: 0.1, max: 1 })}
                ${input("pressureDropPa", l.terminalPressureDrop, "Pa", d.pressureDropPa, { min: 0 })}
                ${input("roomTargetDbA", l.roomTarget, "dB(A)", d.roomTargetDbA, { min: 15, max: 90 })}
                ${input("distanceM", l.distance, "m", d.distanceM, { min: 0.5 })}
                ${input("roomAbsorptionM2", l.roomAbsorption, "m² sabin", d.roomAbsorptionM2, { min: 0.1 })}
            </div>
        `;
    };

    const renderPlantEquipmentRows = (defaults, lang) => {
        const l = LABELS[lang];
        let rows = "";
        for (let index = 1; index <= 4; index += 1) {
            rows += `
                <tr>
                    <td><input type="text" data-field="equipment${index}Label" value="${escapeHtml(defaults[`equipment${index}Label`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="equipment${index}WidthM" value="${escapeHtml(defaults[`equipment${index}WidthM`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="equipment${index}LengthM" value="${escapeHtml(defaults[`equipment${index}LengthM`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="equipment${index}ServiceFrontM" value="${escapeHtml(defaults[`equipment${index}ServiceFrontM`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="equipment${index}ServiceSideM" value="${escapeHtml(defaults[`equipment${index}ServiceSideM`])}"></td>
                </tr>
            `;
        }
        return `
            <div class="table-scroll">
                <table class="tool-input-table">
                    <thead>
                        <tr>
                            <th>${escapeHtml(l.equipmentLabel)}</th>
                            <th>${escapeHtml(l.equipmentWidth)} m</th>
                            <th>${escapeHtml(l.equipmentLength)} m</th>
                            <th>${escapeHtml(l.serviceFront)} m</th>
                            <th>${escapeHtml(l.serviceSide)} m</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    };

    const renderPlantFitForm = (lang) => {
        const d = currentToolDefaults("plantFit");
        const l = LABELS[lang];
        return `
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("roomWidthM", l.plantRoomWidth, "m", d.roomWidthM, { min: 0 })}
                ${input("roomLengthM", l.plantRoomLength, "m", d.roomLengthM, { min: 0 })}
            </div>
            <h3>${escapeHtml(l.equipment)}</h3>
            ${renderPlantEquipmentRows(d, lang)}
        `;
    };

    const renderRoofEquipmentRows = (defaults, lang) => {
        const l = LABELS[lang];
        let rows = "";
        for (let index = 1; index <= 3; index += 1) {
            rows += `
                <tr>
                    <td><input type="text" data-field="roofEquipment${index}Label" value="${escapeHtml(defaults[`roofEquipment${index}Label`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="roofEquipment${index}WeightKg" value="${escapeHtml(defaults[`roofEquipment${index}WeightKg`])}"></td>
                    <td><input type="number" inputmode="decimal" step="any" min="0" data-field="roofEquipment${index}SupportAreaM2" value="${escapeHtml(defaults[`roofEquipment${index}SupportAreaM2`])}"></td>
                </tr>
            `;
        }
        return `
            <div class="table-scroll">
                <table class="tool-input-table">
                    <thead>
                        <tr>
                            <th>${escapeHtml(l.equipmentLabel)}</th>
                            <th>${escapeHtml(l.equipmentWeight)} kg</th>
                            <th>${escapeHtml(l.supportArea)} m²</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    };

    const renderRoofLoadForm = (lang) => {
        const d = currentToolDefaults("roofLoad");
        const l = LABELS[lang];
        return `
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("allowableLoadKgM2", l.allowableLoad, "kg/m²", d.allowableLoadKgM2, { min: 0 })}
            </div>
            <div class="tool-check-grid">${checkbox("windExposed", l.windExposed, d.windExposed)}</div>
            <h3>${escapeHtml(l.equipment)}</h3>
            ${renderRoofEquipmentRows(d, lang)}
        `;
    };

    const renderHvacForm = (lang) => {
        const d = currentToolDefaults("hvac");
        const l = LABELS[lang];
        return `
            <h3>${escapeHtml(l.buildingConditions)}</h3>
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("indoorWinterTemp", l.indoorWinter, "°C", d.indoorWinterTemp)}
                ${input("outdoorWinterTemp", l.outdoorWinter, "°C", d.outdoorWinterTemp)}
                ${input("indoorSummerTemp", l.indoorSummer, "°C", d.indoorSummerTemp)}
                ${input("outdoorSummerTemp", l.outdoorSummer, "°C", d.outdoorSummerTemp)}
                ${input("indoorWinterRh", l.indoorWinterRh, "%", d.indoorWinterRh, { min: 10, max: 90 })}
                ${input("outdoorWinterRh", l.outdoorWinterRh, "%", d.outdoorWinterRh, { min: 0, max: 100 })}
                ${input("indoorSummerRh", l.indoorSummerRh, "%", d.indoorSummerRh, { min: 10, max: 90 })}
                ${input("outdoorSummerRh", l.outdoorSummerRh, "%", d.outdoorSummerRh, { min: 0, max: 100 })}
                ${input("heatRecoveryPercent", l.heatRecovery, "%", d.heatRecoveryPercent, { min: 0, max: 95 })}
                ${input("marginPercent", l.renovationMargin, "%", d.marginPercent, { min: 0, max: 100 })}
                ${input("ductVelocityMS", l.ductVelocity, "m/s", d.ductVelocityMS, { min: 0.5, max: 12 })}
                ${input("defaultUValue", l.defaultUValue, "W/m²K", d.defaultUValue, { min: 0 })}
                ${input("pressureOffsetPercent", l.pressureOffset, "%", d.pressureOffsetPercent, { min: 0, max: 30 })}
                ${input("pressureDropPa", l.pressureDrop, "Pa", d.pressureDropPa, { min: 50, max: 3000 })}
                ${input("cleanroomFilterPressurePa", l.cleanroomFilterPressure, "Pa", d.cleanroomFilterPressurePa, { min: 0, max: 1500 })}
                ${input("fanEfficiencyPercent", l.fanEfficiency, "%", d.fanEfficiencyPercent, { min: 20, max: 90 })}
                ${input("cleanroomLeakagePercent", l.cleanroomLeakage, "%", d.cleanroomLeakagePercent, { min: 0, max: 25 })}
            </div>
            <h3>${escapeHtml(l.roomSchedule)}</h3>
            ${renderHvacRoomRows(d, lang)}
        `;
    };

    const renderShaftForm = (lang) => {
        const d = currentToolDefaults("shafts");
        const l = LABELS[lang];
        return `
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("airFlow", l.airFlow, "m³/h", d.airFlow, { min: 0 })}
                ${input("airSpeed", l.airSpeed, "m/s", d.airSpeed, { min: 0.1 })}
                ${input("ductCount", l.ductCount, "", d.ductCount, { min: 1, step: 1 })}
                ${input("insulation", l.insulation, "mm", d.insulation, { min: 0 })}
                ${input("clearance", l.clearance, "mm", d.clearance, { min: 0 })}
                ${input("pipeWidth", l.pipeWidth, "mm", d.pipeWidth, { min: 0 })}
                ${input("pipeDepth", l.pipeDepth, "mm", d.pipeDepth, { min: 0 })}
            </div>
        `;
    };

    const renderOfferForm = (lang) => {
        const d = currentToolDefaults("offer");
        const l = LABELS[lang];
        const checks = OFFER_ITEMS.map(([field, labels]) => checkbox(field, textFor(labels, lang), d[field])).join("");
        return `
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("quoteA", l.quoteA, "EUR", d.quoteA, { min: 0 })}
                ${input("quoteB", l.quoteB, "EUR", d.quoteB, { min: 0 })}
                ${input("quoteC", l.quoteC, "EUR", d.quoteC, { min: 0 })}
            </div>
            <h3>${escapeHtml(l.offerPrices)}</h3>
            <div class="tool-check-grid">${checks}</div>
        `;
    };

    const renderAcousticsForm = (lang) => {
        const d = currentToolDefaults("acoustics");
        const l = LABELS[lang];
        return `
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("surfaceMass", l.surfaceMass, "kg/m²", d.surfaceMass, { min: 0 })}
                ${input("frequency", l.frequency, "Hz", d.frequency, { min: 1 })}
                ${input("flankingMargin", l.flankingMargin, "dB", d.flankingMargin, { min: 0 })}
                ${input("acousticTarget", l.acousticTarget, "dB", d.acousticTarget, { min: 0 })}
            </div>
        `;
    };

    const renderIntakeForm = (lang) => {
        const d = currentToolDefaults("intake");
        const l = LABELS[lang];
        const checks = INTAKE_ITEMS.map(([field, labels]) => checkbox(field, textFor(labels, lang), d[field])).join("");
        return `
            <div class="tool-form-grid">
                ${input("projectName", LANGS[lang].projectName, "", d.projectName, { type: "text" })}
                ${input("openingWidth", l.openingWidth, "m", d.openingWidth, { min: 0 })}
                ${input("floorsAbove", l.floorsAbove, "", d.floorsAbove, { min: 0, step: 1 })}
                ${input("span", l.span, "m", d.span, { min: 0 })}
            </div>
            <div class="tool-check-grid">${checkbox("loadChange", l.loadChange, d.loadChange)}${checks}</div>
        `;
    };

    const resultCards = (items, lang) => `
        <div class="result-grid">
            ${items.map((item) => `
                <article class="result-card">
                    <span>${escapeHtml(item.label)}</span>
                    <strong>${escapeHtml(item.value)}</strong>
                    ${item.detail ? `<em>${escapeHtml(item.detail)}</em>` : ""}
                </article>
            `).join("")}
        </div>
    `;

    const tableCell = (cell) => {
        if (cell && typeof cell === "object" && cell.href) {
            return `<a href="${escapeHtml(cell.href)}" target="_blank" rel="noopener">${escapeHtml(cell.text || cell.href)}</a>`;
        }
        return escapeHtml(cell);
    };

    const detailTable = (headers, rows) => `
        <div class="table-scroll">
            <table class="tool-result-table">
                <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
                <tbody>
                    ${rows.map((row) => `<tr>${row.map((cell) => `<td>${tableCell(cell)}</td>`).join("")}</tr>`).join("")}
                </tbody>
            </table>
        </div>
    `;

    const messageList = (title, messages, className) => messages.length ? `
        <section class="${className}">
            <h3>${escapeHtml(title)}</h3>
            <ul>${messages.map((message) => `<li>${escapeHtml(message)}</li>`).join("")}</ul>
        </section>
    ` : "";

    const postJson = async (endpoint, payload, lang) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(payload)
        });
        let data = null;
        try {
            data = await response.json();
        } catch (error) {
            throw new CalculationError([LANGS[lang].apiUnavailable]);
        }
        if (!response.ok || !data.ok) {
            throw new CalculationError((data && data.details && data.details.length)
                ? data.details
                : [data && data.error ? data.error : LANGS[lang].apiUnavailable]);
        }
        return data.result || {};
    };

    const postCalculation = async (toolId, payload, lang) => postJson(API_ENDPOINTS[toolId], payload, lang);

    const postReport = async (toolId, payload, lang) => {
        if (!REPORT_ENDPOINTS[toolId]) throw new CalculationError([LANGS[lang].reportUnavailable]);
        return postJson(REPORT_ENDPOINTS[toolId], payload, lang);
    };

    const conceptcheckPayload = (state, lang) => {
        const l = LABELS[lang];
        return {
            projectName: state.projectName || "",
            buildingType: state.buildingType || "school",
            grossAreaM2: optionalNumber(state.grossAreaM2, l.grossArea, { min: 1 }) ?? undefined,
            netAreaM2: requireNumber(state.netAreaM2, l.netArea, { min: 1 }),
            numberOfZones: Math.max(1, Math.round(requireNumber(state.numberOfZones, l.numberOfZones, { min: 1 }))),
            occupancy: requireNumber(state.occupancy, l.occupants, { min: 0 }),
            workshopProcessZones: Boolean(state.workshopProcessZones),
            ventilationTargetAch: requireNumber(state.ventilationTargetAch, l.ach, { min: 0 }),
            desiredComfortLevel: state.desiredComfortLevel || "standard",
            indoorWinterTemp: requireNumber(state.indoorWinterTemp, l.indoorWinter),
            outdoorWinterTemp: requireNumber(state.outdoorWinterTemp, l.outdoorWinter),
            indoorSummerTemp: requireNumber(state.indoorSummerTemp, l.indoorSummer),
            outdoorSummerTemp: requireNumber(state.outdoorSummerTemp, l.outdoorSummer),
            availableShaftWidthMm: optionalNumber(state.availableShaftWidthMm, l.shaftWidth, { min: 0 }) ?? 0,
            availableShaftDepthMm: optionalNumber(state.availableShaftDepthMm, l.shaftDepth, { min: 0 }) ?? 0,
            plantRoomWidthM: optionalNumber(state.plantRoomWidthM, l.plantRoomWidth, { min: 0 }) ?? 0,
            plantRoomLengthM: optionalNumber(state.plantRoomLengthM, l.plantRoomLength, { min: 0 }) ?? 0
        };
    };

    const calculateConceptcheck = async (state, lang) => {
        const l = LABELS[lang];
        const result = await postCalculation("conceptcheck", conceptcheckPayload(state, lang), lang);
        const outputs = result.outputs || {};
        const shaftFit = outputs.shaftFit || null;
        const plantRoom = outputs.plantRoomCheck || null;
        const ahuRows = (outputs.roughAhuSplit || []).map((group) => [
            group.group,
            (group.rooms || []).join(", "),
            formatValue(group.supplyM3H, "m³/h", lang, 0),
            formatValue(group.extractM3H, "m³/h", lang, 0),
            group.rationale
        ]);
        const constraintRows = [
            shaftFit ? [
                l.availableShaft,
                `${formatNumber(shaftFit.availableWidthMm, lang, 0)} × ${formatNumber(shaftFit.availableDepthMm, lang, 0)} mm`,
                `${formatValue(shaftFit.availableAreaM2, "m²", lang, 2)} / ${formatValue(shaftFit.requiredAreaM2, "m²", lang, 2)}`,
                riskLevelLabel(shaftFit.status, lang)
            ] : null,
            plantRoom ? [
                l.plantRoom,
                formatValue(plantRoom.roomAreaM2, "m²", lang, 1),
                formatValue(plantRoom.requiredServiceAreaM2, "m²", lang, 1),
                riskLevelLabel(plantRoom.risk, lang)
            ] : null
        ].filter(Boolean);
        const warnings = []
            .concat(outputs.constraintWarnings || [])
            .concat((outputs.missingInputs || []).map((item) => `${l.missingInputs}: ${item}`));
        return {
            warnings,
            cards: [
                { label: l.conceptStatus, value: result.resultLabel || "concept", detail: result.formulaVersion || "" },
                { label: l.ahuFlow, value: formatValue(outputs.totalSupplyM3H, "m³/h", lang, 0), detail: `${l.extract}: ${formatValue(outputs.totalExtractM3H, "m³/h", lang, 0)}` },
                { label: l.heating, value: formatValue(outputs.heatingOrderKw, "kW", lang, 1), detail: "orde van grootte" },
                { label: l.cooling, value: formatValue(outputs.coolingOrderKw, "kW", lang, 1), detail: "incl. vocht/fan" },
                { label: l.shaftSize, value: formatValue(outputs.shaftAreaOrderM2, "m²", lang, 2), detail: shaftFit ? riskLevelLabel(shaftFit.status, lang) : l.availableShaft },
                { label: l.pressureRisk, value: riskLevelLabel(outputs.pressureRisk, lang), detail: `${l.soundRisk}: ${soundLevelLabel(outputs.noiseRisk, lang)}` },
                { label: l.missingInputs, value: String((outputs.missingInputs || []).length), detail: outputs.recommendation || "" }
            ],
            table: [
                `<h3>${escapeHtml(l.ahuSplit)}</h3>`,
                detailTable([l.role, l.roomSchedule, l.supply, l.extract, LANGS[lang].note], ahuRows),
                constraintRows.length ? `<h3>${escapeHtml(l.constraintCheck)}</h3>${detailTable([l.component, LANGS[lang].value, l.sourceBasis, l.status], constraintRows)}` : "",
                `<h3>${escapeHtml(l.recommendation)}</h3><p>${escapeHtml(outputs.recommendation || "")}</p>`
            ].join(""),
            reportPayload: { result }
        };
    };

    const calculateProjectIntake = async (state, lang) => {
        const l = LABELS[lang];
        const result = await postCalculation("projectIntake", {
            projectName: state.projectName || "",
            buildingType: state.buildingType || "school",
            projectPhase: state.projectPhase || "concept",
            ...Object.fromEntries(PROJECT_INTAKE_FLAGS.map(([field]) => [field, Boolean(state[field])])),
            ...Object.fromEntries(PROJECT_INTAKE_ITEMS.map(([field]) => [field, Boolean(state[field])]))
        }, lang);
        const missingRows = (result.missingInputs || []).map((item) => [
            item.label || item.id,
            item.priority || "",
            item.category || "",
            item.why || ""
        ]);
        const riskRows = (result.interfaceRisks || []).map((risk) => [
            risk.code || "",
            risk.level || "",
            risk.message || ""
        ]);
        return {
            warnings: (result.nextActions || []).concat(result.noUploadPolicy ? [result.noUploadPolicy] : []),
            cards: [
                { label: l.readiness, value: `${formatNumber(result.readinessPercent, lang, 0)} %`, detail: result.readinessLevel || "" },
                { label: l.missingInputs, value: String((result.missingInputs || []).length), detail: `${result.criticalMissingCount || 0} critical` },
                { label: l.attention, value: String((result.interfaceRisks || []).length), detail: result.paidStudyFit || "" }
            ],
            table: [
                missingRows.length ? `<h3>${escapeHtml(l.missingInputs)}</h3>${detailTable([LANGS[lang].note, l.status, l.component, l.recommendation], missingRows)}` : "",
                riskRows.length ? `<h3>${escapeHtml(l.constraintCheck)}</h3>${detailTable([l.component, l.status, LANGS[lang].note], riskRows)}` : "",
                `<h3>${escapeHtml(l.recommendation)}</h3><p>${escapeHtml((result.nextActions || []).join(" "))}</p>`
            ].join("")
        };
    };

    const calculateGrilleNoise = async (state, lang) => {
        const l = LABELS[lang];
        const result = await postCalculation("grilleNoise", {
            projectName: state.projectName || "",
            roomType: state.roomType || "generic",
            airflowM3H: requireNumber(state.airflowM3H, l.airFlow, { min: 0.01 }),
            grilleWidthMm: requireNumber(state.grilleWidthMm, l.grilleWidth, { min: 1 }),
            grilleHeightMm: requireNumber(state.grilleHeightMm, l.grilleHeight, { min: 1 }),
            freeAreaRatio: requireNumber(state.freeAreaRatio, l.freeAreaRatio, { min: 0.1, max: 1 }),
            pressureDropPa: optionalNumber(state.pressureDropPa, l.terminalPressureDrop, { min: 0 }) ?? undefined,
            roomTargetDbA: requireNumber(state.roomTargetDbA, l.roomTarget, { min: 15, max: 90 }),
            distanceM: requireNumber(state.distanceM, l.distance, { min: 0.5 }),
            roomAbsorptionM2: requireNumber(state.roomAbsorptionM2, l.roomAbsorption, { min: 0.1 })
        }, lang);
        const checkRows = (result.checks || []).map((item) => [
            item.check,
            formatValue(item.value, item.unit || "", lang, item.unit === "Pa" ? 0 : 1),
            riskLevelLabel(item.risk, lang)
        ]);
        const recommendationRows = (result.recommendations || []).map((item) => [item]);
        return {
            warnings: result.warnings || [],
            cards: [
                { label: l.soundRisk, value: riskLevelLabel(result.risk, lang), detail: result.resultLabel || "" },
                { label: l.faceVelocity, value: formatValue(result.faceVelocityMS, "m/s", lang, 2), detail: `${l.freeArea}: ${formatValue(result.freeAreaM2, "m²", lang, 3)}` },
                { label: l.terminalPressureDrop, value: formatValue(result.pressureDropPa, "Pa", lang, 0), detail: `${l.freeAreaRatio}: ${formatNumber(result.freeAreaRatio, lang, 2)}` },
                { label: l.estimatedRoomLevel, value: formatValue(result.estimatedRoomLevelDbA, "dB(A)", lang, 1), detail: `${l.roomTarget}: ${formatValue(result.roomTargetDbA, "dB(A)", lang, 1)}` },
                { label: l.noiseMargin, value: formatValue(result.marginDb, "dB", lang, 1), detail: `${l.estimatedSoundPower}: ${formatValue(result.estimatedSoundPowerDbA, "dB(A)", lang, 1)}` }
            ],
            table: [
                detailTable([l.component, LANGS[lang].value, l.status], checkRows),
                recommendationRows.length ? `<h3>${escapeHtml(l.manufacturerCheck)}</h3>${detailTable([l.recommendation], recommendationRows)}` : ""
            ].join("")
        };
    };

    const calculatePlantFit = async (state, lang) => {
        const l = LABELS[lang];
        const errors = [];
        const equipment = [];
        for (let index = 1; index <= 4; index += 1) {
            const label = state[`equipment${index}Label`] || "";
            const width = optionalNumber(state[`equipment${index}WidthM`], `${label || l.equipmentLabel} ${l.equipmentWidth}`, { min: 0 });
            const length = optionalNumber(state[`equipment${index}LengthM`], `${label || l.equipmentLabel} ${l.equipmentLength}`, { min: 0 });
            const serviceFront = optionalNumber(state[`equipment${index}ServiceFrontM`], `${label || l.equipmentLabel} ${l.serviceFront}`, { min: 0 });
            const serviceSide = optionalNumber(state[`equipment${index}ServiceSideM`], `${label || l.equipmentLabel} ${l.serviceSide}`, { min: 0 });
            const hasEquipment = label.trim() || width !== null || length !== null;
            if (!hasEquipment) continue;
            if (!label.trim()) errors.push(`${l.equipmentLabel} ${index}: ${LANGS[lang].missing}`);
            if (width === null || width <= 0) errors.push(`${label || l.equipmentLabel} ${l.equipmentWidth}: ${LANGS[lang].missing}`);
            if (length === null || length <= 0) errors.push(`${label || l.equipmentLabel} ${l.equipmentLength}: ${LANGS[lang].missing}`);
            if (label.trim() && width !== null && width > 0 && length !== null && length > 0) {
                equipment.push({
                    label,
                    widthM: width,
                    lengthM: length,
                    serviceFrontM: serviceFront ?? 0.8,
                    serviceSideM: serviceSide ?? 0.4
                });
            }
        }
        if (!equipment.length) errors.push(`${l.equipment}: ${LANGS[lang].missing}`);
        if (errors.length) return { errors, warnings: [] };
        const roomWidthM = requireNumber(state.roomWidthM, l.plantRoomWidth, { min: 0.1 });
        const roomLengthM = requireNumber(state.roomLengthM, l.plantRoomLength, { min: 0.1 });
        const result = await postCalculation("plantFit", {
            roomWidthM,
            roomLengthM,
            equipment
        }, lang);
        const rows = (result.equipment || []).map((item) => [
            item.label,
            formatValue(item.footprintM2, "m²", lang, 2),
            formatValue(item.serviceEnvelopeM2, "m²", lang, 2),
            formatValue(item.serviceFrontM, "m", lang, 2),
            formatValue(item.serviceSideM, "m", lang, 2)
        ]);
        return {
            warnings: result.warnings || [],
            cards: [
                { label: l.status, value: riskLevelLabel(result.risk, lang), detail: result.risk || "" },
                { label: l.plantRoom, value: formatValue(result.roomAreaM2, "m²", lang, 1), detail: `${formatValue(roomWidthM, "m", lang, 1)} × ${formatValue(roomLengthM, "m", lang, 1)}` },
                { label: l.requiredServiceArea, value: formatValue(result.requiredServiceAreaM2, "m²", lang, 1), detail: `${l.fitRatio}: ${formatValue(result.fitRatioPercent, "%", lang, 0)}` },
                { label: l.equipment, value: String((result.equipment || []).length), detail: l.serviceFront }
            ],
            table: detailTable([l.equipmentLabel, l.area, l.requiredServiceArea, l.serviceFront, l.serviceSide], rows)
        };
    };

    const calculateRoofLoad = async (state, lang) => {
        const l = LABELS[lang];
        const errors = [];
        const equipment = [];
        for (let index = 1; index <= 3; index += 1) {
            const label = state[`roofEquipment${index}Label`] || "";
            const weight = optionalNumber(state[`roofEquipment${index}WeightKg`], `${label || l.equipmentLabel} ${l.equipmentWeight}`, { min: 0 });
            const supportArea = optionalNumber(state[`roofEquipment${index}SupportAreaM2`], `${label || l.equipmentLabel} ${l.supportArea}`, { min: 0 });
            const hasEquipment = label.trim() || weight !== null || supportArea !== null;
            if (!hasEquipment) continue;
            if (!label.trim()) errors.push(`${l.equipmentLabel} ${index}: ${LANGS[lang].missing}`);
            if (weight === null || weight <= 0) errors.push(`${label || l.equipmentLabel} ${l.equipmentWeight}: ${LANGS[lang].missing}`);
            if (supportArea === null || supportArea <= 0) errors.push(`${label || l.equipmentLabel} ${l.supportArea}: ${LANGS[lang].missing}`);
            if (label.trim() && weight !== null && weight > 0 && supportArea !== null && supportArea > 0) {
                equipment.push({
                    label,
                    weightKg: weight,
                    supportAreaM2: supportArea
                });
            }
        }
        if (!equipment.length) errors.push(`${l.equipment}: ${LANGS[lang].missing}`);
        if (errors.length) return { errors, warnings: [] };
        const allowableLoadKgM2 = requireNumber(state.allowableLoadKgM2, l.allowableLoad, { min: 0.1 });
        const result = await postCalculation("roofLoad", {
            allowableLoadKgM2,
            windExposed: Boolean(state.windExposed),
            equipment
        }, lang);
        const equipmentRows = (result.equipment || []).map((item) => [
            item.label,
            formatValue(item.weightKg, "kg", lang, 0),
            formatValue(item.supportAreaM2, "m²", lang, 2),
            formatValue(item.loadKgM2, "kg/m²", lang, 0),
            item.exceedsIndicativeLimit ? LANGS[lang].warnings : LANGS[lang].ok
        ]);
        const checklistRows = (result.checklist || []).map((item) => [item]);
        return {
            warnings: result.warnings || [],
            cards: [
                { label: l.status, value: riskLevelLabel(result.risk, lang), detail: result.risk || "" },
                { label: l.totalWeight, value: formatValue(result.totalWeightKg, "kg", lang, 0), detail: `${l.allowableLoad}: ${formatValue(result.allowableLoadKgM2, "kg/m²", lang, 0)}` },
                { label: l.equipment, value: String((result.equipment || []).length), detail: state.windExposed ? l.windExposed : "" }
            ],
            table: [
                detailTable([l.equipmentLabel, l.equipmentWeight, l.supportArea, l.roofLoad, l.status], equipmentRows),
                checklistRows.length ? `<h3>${escapeHtml(l.checklist)}</h3>${detailTable([LANGS[lang].note], checklistRows)}` : ""
            ].join("")
        };
    };

    const calculateHvac = async (state, lang) => {
        const l = LABELS[lang];
        const errors = [];
        const rooms = [];
        for (let index = 1; index <= 6; index += 1) {
            const name = state[`room${index}Name`] || "";
            const area = optionalNumber(state[`room${index}Area`], `${l.roomName} ${index} ${l.area}`, { min: 0 });
            const hasRoom = name.trim() || area !== null;
            if (!hasRoom) continue;
            if (area === null || area <= 0) {
                errors.push(`${name || `${l.roomName} ${index}`}: ${l.area}: ${LANGS[lang].missing}`);
                continue;
            }
            const height = optionalNumber(state[`room${index}Height`], `${name} ${l.height}`, { min: 2 }) ?? 3;
            const occupants = optionalNumber(state[`room${index}Occupants`], `${name} ${l.occupants}`, { min: 0 });
            const exposed = optionalNumber(state[`room${index}Exposed`], `${name} ${l.exposedArea}`, { min: 0 });
            const ach = optionalNumber(state[`room${index}Ach`], `${name} ${l.minAch}`, { min: 0 });
            rooms.push({
                name: name || `${l.roomName} ${index}`,
                type: state[`room${index}Type`] || "office",
                areaM2: area,
                heightM: height,
                occupants: occupants ?? -1,
                exposedAreaM2: exposed ?? undefined,
                minAch: ach ?? undefined,
                pressureRole: state[`room${index}Pressure`] || "neutral",
                cleanroomClass: state[`room${index}CleanroomClass`] || ""
            });
        }
        if (!rooms.length) errors.push(`${l.roomSchedule}: ${LANGS[lang].missing}`);
        if (errors.length) return { errors, warnings: [] };
        const result = await postCalculation("hvac", {
            projectName: state.projectName || "",
            indoorWinterTemp: requireNumber(state.indoorWinterTemp, l.indoorWinter),
            outdoorWinterTemp: requireNumber(state.outdoorWinterTemp, l.outdoorWinter),
            indoorSummerTemp: requireNumber(state.indoorSummerTemp, l.indoorSummer),
            outdoorSummerTemp: requireNumber(state.outdoorSummerTemp, l.outdoorSummer),
            indoorWinterRh: requireNumber(state.indoorWinterRh, l.indoorWinterRh, { min: 10, max: 90 }),
            outdoorWinterRh: requireNumber(state.outdoorWinterRh, l.outdoorWinterRh, { min: 0, max: 100 }),
            indoorSummerRh: requireNumber(state.indoorSummerRh, l.indoorSummerRh, { min: 10, max: 90 }),
            outdoorSummerRh: requireNumber(state.outdoorSummerRh, l.outdoorSummerRh, { min: 0, max: 100 }),
            heatRecoveryPercent: requireNumber(state.heatRecoveryPercent, l.heatRecovery, { min: 0, max: 95 }),
            marginPercent: requireNumber(state.marginPercent, l.renovationMargin, { min: 0, max: 100 }),
            ductVelocityMS: requireNumber(state.ductVelocityMS, l.ductVelocity, { min: 0.5, max: 12 }),
            defaultUValue: requireNumber(state.defaultUValue, l.defaultUValue, { min: 0 }),
            pressureOffsetPercent: requireNumber(state.pressureOffsetPercent, l.pressureOffset, { min: 0, max: 30 }),
            pressureDropPa: requireNumber(state.pressureDropPa, l.pressureDrop, { min: 50, max: 3000 }),
            cleanroomFilterPressurePa: requireNumber(state.cleanroomFilterPressurePa, l.cleanroomFilterPressure, { min: 0, max: 1500 }),
            fanEfficiencyPercent: requireNumber(state.fanEfficiencyPercent, l.fanEfficiency, { min: 20, max: 90 }),
            cleanroomLeakagePercent: requireNumber(state.cleanroomLeakagePercent, l.cleanroomLeakage, { min: 0, max: 25 }),
            rooms
        }, lang);
        const totals = result.totals || {};
        const roomRows = (result.rooms || []).map((room) => [
            room.name,
            room.templateLabel || room.type,
            formatValue(room.supplyM3H, "m³/h", lang, 0),
            formatValue(room.extractM3H, "m³/h", lang, 0),
            formatValue(room.ach, "1/h", lang, 1),
            optionLabel(HVAC_PRESSURE_ROLES, room.pressureRole, lang),
            formatValue(room.leakageM3H || Math.abs(room.transferM3H || 0), "m³/h", lang, 0),
            formatValue(room.heatingW / 1000, "kW", lang, 1),
            formatValue(room.coolingW / 1000, "kW", lang, 1),
            `${formatValue(room.humidificationKgH, "kg/h", lang, 2)} / ${formatValue(room.dehumidificationKgH, "kg/h", lang, 2)}`,
            room.filterConcept || ""
        ]);
        const equipmentRows = (result.equipmentSelection || result.productReferences || []).map((item) => [
            item.role || item.family,
            item.basis || item.examples,
            item.direction || item.note,
            item.examples || "",
            item.url ? { href: item.url, text: l.openLink } : "",
            item.status || item.note || ""
        ]);
        const pressureRows = (result.pressureComponents || []).map((item) => [
            item.component,
            formatValue(item.pressurePa, "Pa", lang, 0),
            item.note
        ]);
        const roomWarnings = (result.rooms || []).flatMap((room) => (room.warnings || []).map((warning) => `${room.name}: ${warning}`));
        const sound = result.sound || {};
        return {
            warnings: (result.warnings || []).concat(roomWarnings),
            cards: [
                { label: l.ahuFlow, value: formatValue(totals.supplyM3H, "m³/h", lang, 0), detail: `${l.extract}: ${formatValue(totals.extractM3H, "m³/h", lang, 0)}` },
                { label: l.outdoorAir, value: formatValue(totals.outdoorAirM3H, "m³/h", lang, 0), detail: `${l.heatRecovery} ${formatValue((result.conditions || {}).heatRecoveryPercent, "%", lang, 0)}` },
                { label: l.outdoorAirFraction, value: formatValue(totals.outdoorAirFractionPercent, "%", lang, 0), detail: `${l.recirculation}: ${formatValue(totals.recirculationM3H, "m³/h", lang, 0)}` },
                { label: l.heating, value: formatValue(totals.heatingKw, "kW", lang, 1), detail: "concept" },
                { label: l.cooling, value: formatValue(totals.coolingKw, "kW", lang, 1), detail: "concept" },
                { label: l.coolingInclFan, value: formatValue(totals.coolingWithLatentAndFanKw, "kW", lang, 1), detail: `${l.latentCooling} ${formatValue(totals.latentCoolingKw, "kW", lang, 1)}` },
                { label: l.heatingCoil, value: formatValue(totals.heatingCoilKw, "kW", lang, 1), detail: `${l.heatRecovery} ${formatValue((result.conditions || {}).winterAfterRecoveryC, "°C", lang, 1)}` },
                { label: l.coolingCoil, value: formatValue(totals.coolingCoilKw, "kW", lang, 1), detail: `${l.condensate} ${formatValue(totals.condensateLH, "l/h", lang, 1)}` },
                { label: l.fanPower, value: formatValue(totals.fanPowerKw, "kW", lang, 2), detail: `${l.sfp} ${formatValue(totals.sfpKwPerM3S, "kW/(m³/s)", lang, 2)}` },
                { label: l.humidification, value: formatValue(totals.humidificationKgH, "kg/h", lang, 2), detail: `${l.dehumidification} ${formatValue(totals.dehumidificationKgH, "kg/h", lang, 2)}` },
                { label: l.pressureDrop, value: formatValue(totals.pressureDropPa, "Pa", lang, 0), detail: `${l.cleanroomLeakage}: ${formatValue(totals.cleanroomLeakageM3H, "m³/h", lang, 0)}` },
                { label: l.soundRisk, value: soundLevelLabel(sound.level, lang), detail: `${l.fanSound} ${formatValue(sound.indicativeFanSoundPowerDbA, "dB(A)", lang, 0)}` },
                { label: l.shaftSize, value: `${formatNumber((totals.indicativeShaftMm || {}).width, lang, 0)} × ${formatNumber((totals.indicativeShaftMm || {}).height, lang, 0)} mm`, detail: `${l.ductDiameter}: ${formatValue(totals.mainDuctDiameterMm, "mm", lang, 0)}` }
            ],
            table: [
                detailTable(
                    [l.roomName, l.roomType, l.supply, l.extract, l.ach, l.pressureRole, l.leakage, l.heating, l.cooling, `${l.humidification}/${l.dehumidification}`, l.productDirection],
                    roomRows
                ),
                `<h3>${escapeHtml(l.pressureComponents)}</h3>`,
                detailTable([l.component, l.pressureDrop, LANGS[lang].note], pressureRows),
                `<h3>${escapeHtml(l.equipmentDirection)}</h3>`,
                detailTable([l.role, l.basis, l.direction, l.examples, l.link, l.status], equipmentRows)
            ].join("")
        };
    };

    const calculateRenovation = async (state, lang) => {
        const l = LABELS[lang];
        const errors = [];
        const warnings = [];
        const indoor = toNumber(state.indoorTemp);
        const outdoor = toNumber(state.outdoorTemp);
        if (!Number.isFinite(indoor)) errors.push(`${l.indoorTemp}: ${LANGS[lang].missing}`);
        if (!Number.isFinite(outdoor)) errors.push(`${l.outdoorTemp}: ${LANGS[lang].missing}`);
        const deltaT = Number.isFinite(indoor) && Number.isFinite(outdoor) ? indoor - outdoor : NaN;
        if (Number.isFinite(deltaT) && deltaT <= 0) errors.push(LANGS[lang].positiveDeltaT);
        const margin = optionalNumber(state.renovationMargin, l.renovationMargin, { min: 0, max: 100 }) ?? 0;
        const components = [];
        for (let index = 1; index <= 5; index += 1) {
            const label = state[`component${index}Label`] || `${l.component} ${index}`;
            const uValue = optionalNumber(state[`component${index}U`], `${label} ${l.uValue}`, { min: 0 });
            const area = optionalNumber(state[`component${index}Area`], `${label} ${l.area}`, { min: 0 });
            if ((uValue !== null && area === null) || (uValue === null && area !== null)) {
                errors.push(`${label}: ${LANGS[lang].pairComponentValues}`);
            }
            if (uValue !== null && area !== null && uValue > 0 && area > 0) {
                components.push({ label, uValue, area });
            }
        }
        let flow = optionalNumber(state.ventilationFlow, l.ventilationFlow, { min: 0 });
        const volume = optionalNumber(state.volume, l.volume, { min: 0 });
        const ach = optionalNumber(state.ach, l.ach, { min: 0 });
        if (flow !== null && flow > 0 && volume !== null && ach !== null) {
            warnings.push(LANGS[lang].directFlowUsed);
        }
        if (!components.length && !flow && !(volume !== null && ach !== null)) warnings.push(LANGS[lang].noHeatInput);
        if (errors.length) return { errors, warnings };
        const result = await postCalculation("renovation", {
            indoorTemp: indoor,
            outdoorTemp: outdoor,
            renovationMargin: margin,
            components,
            ventilationFlow: flow || 0,
            volume: volume ?? undefined,
            airChanges: ach ?? undefined
        }, lang);
        return {
            warnings,
            cards: [
                { label: l.totalPower, value: formatValue(result.totalKw, "kW", lang, 2), detail: "incl. marge" },
                { label: l.transmissionTotal, value: formatValue(result.transmissionW, "W", lang, 0), detail: "Σ U·A·ΔT" },
                { label: l.ventilationTotal, value: formatValue(result.ventilationW, "W", lang, 0), detail: "0.34·qv·ΔT" },
                { label: l.marginValue, value: formatValue(result.marginW, "W", lang, 0), detail: `${formatNumber(margin, lang, 0)} %` }
            ],
            table: detailTable(
                [l.component, l.uValue, l.area, l.loss],
                (result.components || []).map((row) => [
                    row.label,
                    formatValue(row.uValue, "W/m²K", lang, 2),
                    formatValue(row.area, "m²", lang, 1),
                    formatValue(row.lossW, "W", lang, 0)
                ]).concat([[l.ventilationFlow, formatValue(result.ventilationFlowM3H, "m³/h", lang, 0), `ΔT ${formatValue(result.deltaT, "K", lang, 1)}`, formatValue(result.ventilationW, "W", lang, 0)]])
            )
        };
    };

    const calculateShafts = async (state, lang) => {
        const l = LABELS[lang];
        const flow = requireNumber(state.airFlow, l.airFlow, { min: 0.01 });
        const velocity = requireNumber(state.airSpeed, l.airSpeed, { min: 0.1 });
        const ductCount = Math.max(1, Math.round(requireNumber(state.ductCount, l.ductCount, { min: 1 })));
        const insulation = optionalNumber(state.insulation, l.insulation, { min: 0 }) ?? 0;
        const clearance = optionalNumber(state.clearance, l.clearance, { min: 0 }) ?? 0;
        const pipeWidth = optionalNumber(state.pipeWidth, l.pipeWidth, { min: 0 }) ?? 0;
        const pipeDepth = optionalNumber(state.pipeDepth, l.pipeDepth, { min: 0 }) ?? 0;
        const result = await postCalculation("shafts", {
            airFlow: flow,
            airSpeed: velocity,
            ductCount,
            insulation,
            clearance,
            pipeWidth,
            pipeDepth
        }, lang);
        return {
            warnings: (result.warningCodes || []).includes("highVelocity") ? [LANGS[lang].highVelocity] : [],
            cards: [
                { label: l.ductDiameter, value: formatValue(result.roundDuctDiameterMm, "mm", lang, 0), detail: "A = qv / (3600·v)" },
                { label: l.rectDuct, value: `${formatNumber(result.rectangularDuctMm.width, lang, 0)} × ${formatNumber(result.rectangularDuctMm.height, lang, 0)} mm`, detail: "2:1" },
                { label: l.shaftSize, value: `${formatNumber(result.indicativeShaftMm.width, lang, 0)} × ${formatNumber(result.indicativeShaftMm.height, lang, 0)} mm`, detail: "afgerond per 10 mm" }
            ],
            table: detailTable(
                [LANGS[lang].formula, LANGS[lang].value, LANGS[lang].unit],
                [
                    ["qv / (3600·v)", formatNumber(result.areaM2, lang, 4), "m²"],
                    ["sqrt(4A/π)", formatNumber(result.roundDuctDiameterMm, lang, 0), "mm"],
                    ["sqrt(A)", formatNumber(result.squareDuctSideMm, lang, 0), "mm"],
                    ["diameter + 2·isolatie", formatNumber(result.outsideDiameterWithInsulationMm, lang, 0), "mm"],
                    ["schacht met speling", `${formatNumber(result.indicativeShaftMm.width, lang, 0)} × ${formatNumber(result.indicativeShaftMm.height, lang, 0)}`, "mm"]
                ]
            )
        };
    };

    const calculateOffer = async (state, lang) => {
        const l = LABELS[lang];
        const checked = OFFER_ITEMS.filter(([field]) => Boolean(state[field]));
        const criticalMissing = OFFER_ITEMS.filter(([field, , critical]) => critical && !state[field]);
        const quoteA = optionalNumber(state.quoteA, l.quoteA, { min: 0 });
        const quoteB = optionalNumber(state.quoteB, l.quoteB, { min: 0 });
        const quoteC = optionalNumber(state.quoteC, l.quoteC, { min: 0 });
        const result = await postCalculation("offer", {
            quoteA,
            quoteB,
            quoteC,
            checks: Object.fromEntries(OFFER_ITEMS.map(([field]) => [field, Boolean(state[field])]))
        }, lang);
        const warnings = criticalMissing.map(([, labels]) => `${LANGS[lang].missing}: ${textFor(labels, lang)}`);
        if ((result.warningCodes || []).includes("highPriceSpread")) warnings.push(LANGS[lang].highPriceSpread);
        return {
            warnings,
            cards: [
                { label: l.offerScore, value: `${formatNumber(result.scorePercent, lang, 0)} %`, detail: result.scorePercent >= 80 ? LANGS[lang].ok : LANGS[lang].warnings },
                { label: l.priceSpread, value: result.priceSpreadPercent === null ? "-" : `${formatNumber(result.priceSpreadPercent, lang, 0)} %`, detail: result.priceSpreadPercent === null ? "min. 2 offertes" : "max-min/min" },
                { label: LANGS[lang].missing, value: String(OFFER_ITEMS.length - checked.length), detail: `${criticalMissing.length} kritiek` }
            ],
            table: detailTable(
                [LANGS[lang].note, LANGS[lang].value],
                OFFER_ITEMS.map(([field, labels, critical]) => [
                    `${textFor(labels, lang)}${critical ? " *" : ""}`,
                    state[field] ? LANGS[lang].yes : LANGS[lang].no
                ])
            )
        };
    };

    const calculateAcoustics = async (state, lang) => {
        const l = LABELS[lang];
        const mass = requireNumber(state.surfaceMass, l.surfaceMass, { min: 0.01 });
        const frequency = requireNumber(state.frequency, l.frequency, { min: 1 });
        const margin = optionalNumber(state.flankingMargin, l.flankingMargin, { min: 0 }) ?? 0;
        const target = optionalNumber(state.acousticTarget, l.acousticTarget, { min: 0 }) ?? 0;
        const result = await postCalculation("acoustics", {
            surfaceMass: mass,
            frequency,
            flankingMargin: margin,
            acousticTarget: target
        }, lang);
        return {
            warnings: (result.warningCodes || []).includes("lowAcoustic") ? [LANGS[lang].lowAcoustic] : [],
            cards: [
                { label: l.massLaw, value: formatValue(result.massLawDb, "dB", lang, 1), detail: "20 log10(m'·f) - 47" },
                { label: l.practicalIndex, value: formatValue(result.practicalDb, "dB", lang, 1), detail: `-${formatNumber(margin, lang, 1)} dB` },
                { label: l.targetDifference, value: formatValue(result.targetDifferenceDb, "dB", lang, 1), detail: target ? `${formatNumber(result.targetDb, lang, 1)} dB` : "" }
            ],
            table: detailTable(
                [LANGS[lang].formula, LANGS[lang].value],
                [
                    ["m'·f", formatNumber(mass * frequency, lang, 0)],
                    ["20 log10(m'·f) - 47", formatValue(result.massLawDb, "dB", lang, 1)],
                    ["R - marge", formatValue(result.practicalDb, "dB", lang, 1)]
                ]
            )
        };
    };

    const calculateIntake = async (state, lang) => {
        const l = LABELS[lang];
        const openingWidth = requireNumber(state.openingWidth, l.openingWidth, { min: 0 });
        const floorsAbove = requireNumber(state.floorsAbove, l.floorsAbove, { min: 0 });
        const span = requireNumber(state.span, l.span, { min: 0 });
        const result = await postCalculation("intake", {
            openingWidth,
            floorsAbove,
            span,
            loadChange: Boolean(state.loadChange),
            ...Object.fromEntries(INTAKE_ITEMS.map(([field]) => [field, Boolean(state[field])]))
        }, lang);
        const attentionLabels = {
            largeOpening: LANGS[lang].largeOpening,
            multipleFloors: LANGS[lang].multipleFloors,
            largeSpan: LANGS[lang].largeSpan,
            newLoads: LANGS[lang].newLoads
        };
        const attentionPoints = (result.attentionCodes || []).map((code) => attentionLabels[code]).filter(Boolean);
        const attentionScore = attentionPoints.length;
        const attention = result.attentionLevel === "high" ? LANGS[lang].attentionHigh : result.attentionLevel === "medium" ? LANGS[lang].attentionMedium : LANGS[lang].attentionLow;
        const missing = (result.missing || []).map((field) => {
            const item = INTAKE_ITEMS.find(([key]) => key === field);
            return item ? `${LANGS[lang].missing}: ${textFor(item[1], lang)}` : `${LANGS[lang].missing}: ${field}`;
        });
        return {
            warnings: attentionPoints.concat(missing),
            cards: [
                { label: l.readiness, value: `${formatNumber(result.readinessPercent, lang, 0)} %`, detail: `${(result.present || []).length}/${INTAKE_ITEMS.length}` },
                { label: l.attention, value: attention, detail: `${attentionScore} ${LANGS[lang].warnings.toLowerCase()}` },
                { label: l.openingWidth, value: formatValue(openingWidth, "m", lang, 2), detail: `${formatNumber(floorsAbove, lang, 0)} ${l.floorsAbove.toLowerCase()}` }
            ],
            table: detailTable(
                [LANGS[lang].note, LANGS[lang].value],
                INTAKE_ITEMS.map(([field, labels]) => [textFor(labels, lang), state[field] ? LANGS[lang].yes : LANGS[lang].no])
            )
        };
    };

    const calculators = {
        conceptcheck: calculateConceptcheck,
        projectIntake: calculateProjectIntake,
        grilleNoise: calculateGrilleNoise,
        plantFit: calculatePlantFit,
        roofLoad: calculateRoofLoad,
        hvac: calculateHvac,
        renovation: calculateRenovation,
        shafts: calculateShafts,
        offer: calculateOffer,
        acoustics: calculateAcoustics,
        intake: calculateIntake
    };

    const formRenderers = {
        conceptcheck: renderConceptcheckForm,
        projectIntake: renderProjectIntakeForm,
        grilleNoise: renderGrilleNoiseForm,
        plantFit: renderPlantFitForm,
        roofLoad: renderRoofLoadForm,
        hvac: renderHvacForm,
        renovation: renderRenovationForm,
        shafts: renderShaftForm,
        offer: renderOfferForm,
        acoustics: renderAcousticsForm,
        intake: renderIntakeForm
    };

    let renderCounter = 0;
    let renderTimer = null;

    const renderResults = async () => {
        const counter = (renderCounter += 1);
        const lang = appState.lang;
        const t = LANGS[lang];
        const resultEl = document.querySelector("[data-tool-results]");
        if (!resultEl) return;
        resultEl.innerHTML = `<h2>${escapeHtml(t.results)}</h2><p>${escapeHtml(t.calculating)}</p>`;
        let result;
        try {
            result = await calculators[appState.activeTool](getFormState(), lang);
        } catch (error) {
            result = { errors: error.messages || [error.message], warnings: [] };
        }
        if (counter !== renderCounter) return;
        if (result.errors && result.errors.length) {
            appState.lastReportPayload = null;
            resultEl.innerHTML = messageList(t.errors, result.errors, "tool-errors");
            return;
        }
        appState.lastReportPayload = result.reportPayload || null;
        resultEl.innerHTML = `
            <h2>${escapeHtml(t.results)}</h2>
            ${resultCards(result.cards || [], lang)}
            ${result.table ? `<h3>${escapeHtml(t.details)}</h3>${result.table}` : ""}
            ${messageList(t.warnings, result.warnings || [], "tool-warnings")}
        `;
    };

    const scheduleRenderResults = () => {
        window.clearTimeout(renderTimer);
        renderTimer = window.setTimeout(renderResults, 350);
    };

    const renderTool = (toolId) => {
        appState.activeTool = toolId;
        appState.lastReportPayload = null;
        const lang = appState.lang;
        const tool = TOOL_TEXT[toolId];
        document.querySelectorAll("[data-tool-tab]").forEach((tab) => {
            const active = tab.dataset.toolTab === toolId;
            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", active ? "true" : "false");
        });
        document.querySelector("[data-tool-title]").textContent = textFor(tool.title, lang);
        document.querySelector("[data-tool-description]").textContent = textFor(tool.description, lang);
        document.querySelector("[data-tool-form]").innerHTML = formRenderers[toolId](lang);
        document.querySelector("[data-message]").textContent = appState.message;
        if (typeof updateStudyMailLink === "function") updateStudyMailLink();
        renderResults();
    };

    const renderTabs = () => {
        const lang = appState.lang;
        const tabs = document.querySelector("[data-tool-tabs]");
        tabs.innerHTML = Object.keys(TOOL_TEXT).map((toolId) => `
            <button type="button" data-tool-tab="${toolId}" role="tab">${escapeHtml(textFor(TOOL_TEXT[toolId].title, lang))}</button>
        `).join("");
        tabs.querySelectorAll("button").forEach((button) => {
            button.addEventListener("click", () => {
                if (typeof history !== "undefined") {
                    history.replaceState(null, "", `#${button.dataset.toolTab}`);
                }
                renderTool(button.dataset.toolTab);
            });
        });
    };

    const saveStateToFile = () => {
        const payload = {
            version: 1,
            activeTool: appState.activeTool,
            lang: appState.lang,
            values: getFormState()
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `ea-suys-tools-${appState.activeTool}.json`;
        link.click();
        URL.revokeObjectURL(link.href);
    };

    const downloadBase64File = (base64, filename, mimeType) => {
        const binary = atob(base64);
        const bytes = new Uint8Array(binary.length);
        for (let index = 0; index < binary.length; index += 1) {
            bytes[index] = binary.charCodeAt(index);
        }
        const blob = new Blob([bytes], { type: mimeType || "application/octet-stream" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename || "ea-suys-report.pdf";
        link.click();
        URL.revokeObjectURL(link.href);
    };

    const downloadReport = async () => {
        const lang = appState.lang;
        const messageEl = document.querySelector("[data-message]");
        try {
            let reportPayload = appState.lastReportPayload;
            if (!REPORT_ENDPOINTS[appState.activeTool]) {
                throw new CalculationError([LANGS[lang].reportUnavailable]);
            }
            if (!reportPayload) {
                const result = await calculators[appState.activeTool](getFormState(), lang);
                if (result.errors && result.errors.length) throw new CalculationError(result.errors);
                reportPayload = result.reportPayload;
                appState.lastReportPayload = reportPayload || null;
            }
            if (!reportPayload) throw new CalculationError([LANGS[lang].reportUnavailable]);
            const report = await postReport(appState.activeTool, { ...reportPayload, format: "pdf" }, lang);
            if (!report.pdfBase64) throw new CalculationError([LANGS[lang].apiUnavailable]);
            downloadBase64File(report.pdfBase64, report.pdfFilename, report.pdfMimeType);
            appState.message = LANGS[lang].reportDownloaded;
        } catch (error) {
            appState.message = (error.messages || [error.message]).join(" ");
        }
        if (messageEl) messageEl.textContent = appState.message;
    };

    const loadPayload = (payload) => {
        if (!payload || !payload.activeTool || !payload.values || !TOOL_TEXT[payload.activeTool]) {
            throw new Error("Invalid payload");
        }
        renderTool(payload.activeTool);
        setFormState(payload.values);
        renderResults();
    };

    const buildStudyMailHref = () => {
        const state = getFormState();
        const projectName = state.projectName || "Concept";
        const toolTitle = textFor(TOOL_TEXT[appState.activeTool].title, appState.lang);
        const subject = encodeURIComponent(`${LANGS[appState.lang].ctaSubject} - ${projectName}`);
        const body = encodeURIComponent(`${LANGS[appState.lang].ctaBody}${projectName}\n\nTool: ${toolTitle}\n`);
        return `mailto:info@easuys.be?subject=${subject}&body=${body}`;
    };

    const updateStudyMailLink = () => {
        const mailLink = document.querySelector("[data-mail]");
        if (mailLink) mailLink.setAttribute("href", buildStudyMailHref());
    };

    const initApp = () => {
        const app = document.querySelector("[data-tool-app]");
        if (!app) return;
        appState.lang = app.dataset.lang || "nl";
        appState.activeTool = "conceptcheck";
        document.querySelector("[data-tool-page-title]").textContent = LANGS[appState.lang].pageTitle;
        document.querySelector("[data-tool-page-intro]").textContent = LANGS[appState.lang].intro;
        document.querySelector("[data-disclaimer-title]").textContent = LANGS[appState.lang].disclaimerTitle;
        document.querySelector("[data-disclaimer-text]").textContent = LANGS[appState.lang].disclaimer;
        document.querySelector("[data-calculate]").textContent = LANGS[appState.lang].calculate;
        document.querySelector("[data-print]").textContent = LANGS[appState.lang].print;
        document.querySelector("[data-download-report]").textContent = LANGS[appState.lang].downloadReport;
        document.querySelector("[data-save]").textContent = LANGS[appState.lang].save;
        document.querySelector("[data-load-label]").textContent = LANGS[appState.lang].load;
        document.querySelector("[data-local-save]").textContent = LANGS[appState.lang].localSave;
        document.querySelector("[data-local-load]").textContent = LANGS[appState.lang].localLoad;
        document.querySelector("[data-mail]").textContent = LANGS[appState.lang].mail;

        renderTabs();
        const hashTool = window.location.hash ? window.location.hash.slice(1) : "";
        renderTool(TOOL_TEXT[hashTool] ? hashTool : appState.activeTool);
        updateStudyMailLink();

        document.querySelector("[data-tool-form]").addEventListener("input", () => {
            updateStudyMailLink();
            scheduleRenderResults();
        });
        document.querySelector("[data-tool-form]").addEventListener("change", () => {
            updateStudyMailLink();
            scheduleRenderResults();
        });
        document.querySelector("[data-calculate]").addEventListener("click", renderResults);
        document.querySelector("[data-print]").addEventListener("click", () => window.print());
        document.querySelector("[data-download-report]").addEventListener("click", downloadReport);
        document.querySelector("[data-save]").addEventListener("click", saveStateToFile);
        document.querySelector("[data-local-save]").addEventListener("click", () => {
            localStorage.setItem("ea-suys-tools-state", JSON.stringify({
                version: 1,
                activeTool: appState.activeTool,
                values: getFormState()
            }));
            appState.message = LANGS[appState.lang].savedLocal;
            document.querySelector("[data-message]").textContent = appState.message;
        });
        document.querySelector("[data-local-load]").addEventListener("click", () => {
            const raw = localStorage.getItem("ea-suys-tools-state");
            if (!raw) {
                appState.message = LANGS[appState.lang].noLocal;
                document.querySelector("[data-message]").textContent = appState.message;
                return;
            }
            loadPayload(JSON.parse(raw));
            appState.message = LANGS[appState.lang].loadedLocal;
            document.querySelector("[data-message]").textContent = appState.message;
        });
        document.querySelector("[data-load]").addEventListener("change", async (event) => {
            try {
                const file = event.target.files[0];
                if (!file) return;
                loadPayload(JSON.parse(await file.text()));
                appState.message = LANGS[appState.lang].fileLoaded;
            } catch (error) {
                appState.message = LANGS[appState.lang].fileError;
            }
            document.querySelector("[data-message]").textContent = appState.message;
            event.target.value = "";
        });
        document.querySelector("[data-mail]").addEventListener("click", () => {
            updateStudyMailLink();
            appState.message = LANGS[appState.lang].mailFallback;
            document.querySelector("[data-message]").textContent = appState.message;
        });
    };

    return {
        initApp
    };
});
