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
            ctaBody: "Beste,\n\nGraag bespreek ik een project op basis van de online rekentools.\n\nProject:\n"
        },
        en: {
            locale: "en-GB",
            pageTitle: "EA Suys calculation tools",
            intro: "Indicative tools for renovation, building services and technical feasibility.",
            calculate: "Calculate",
            print: "Print report",
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
            ctaBody: "Dear,\n\nI would like to discuss a project based on the online calculation tools.\n\nProject:\n"
        },
        fr: {
            locale: "fr-BE",
            pageTitle: "Outils de calcul EA Suys",
            intro: "Outils indicatifs pour rénovation, techniques du bâtiment et faisabilité technique.",
            calculate: "Calculer",
            print: "Imprimer le rapport",
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
            ctaBody: "Bonjour,\n\nJe souhaite discuter d'un projet sur base des outils de calcul en ligne.\n\nProjet :\n"
        }
    };

    const TOOL_TEXT = {
        hvac: {
            title: {
                nl: "HVAC gebouwconcept",
                en: "HVAC building concept",
                fr: "Concept HVAC bâtiment"
            },
            description: {
                nl: "Wizard voor volledige gebouwconcepten: ruimtestaat, ventilatie, verwarming, koeling, schachten en cleanroomzones.",
                en: "Wizard for whole-building concepts: room schedule, ventilation, heating, cooling, shafts and cleanroom zones.",
                fr: "Assistant pour concepts bâtiment : locaux, ventilation, chauffage, refroidissement, gaines et zones cleanroom."
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
            sourceBasis: "Bronbasis"
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
            sourceBasis: "Source basis"
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
            sourceBasis: "Base de sources"
        }
    };

    const DEFAULTS = {
        hvac: {
            projectName: "Competentiepool concept",
            indoorWinterTemp: 20,
            outdoorWinterTemp: -8,
            indoorSummerTemp: 26,
            outdoorSummerTemp: 32,
            heatRecoveryPercent: 75,
            marginPercent: 15,
            ductVelocityMS: 4,
            defaultUValue: 0.45,
            pressureOffsetPercent: 8,
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

    class CalculationError extends Error {
        constructor(messages) {
            super(messages.join("; "));
            this.messages = messages;
        }
    }

    const API_BASE_URL = "https://easuys-tools-api.yellow-violet-f185.workers.dev";
    const API_ENDPOINTS = {
        hvac: "/calculate/hvac-building",
        renovation: "/calculate/renovation",
        shafts: "/calculate/shaft",
        offer: "/calculate/offer",
        acoustics: "/calculate/acoustics",
        intake: "/calculate/intake"
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

    const appState = {
        lang: "nl",
        activeTool: "renovation",
        message: ""
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
                ${input("heatRecoveryPercent", l.heatRecovery, "%", d.heatRecoveryPercent, { min: 0, max: 95 })}
                ${input("marginPercent", l.renovationMargin, "%", d.marginPercent, { min: 0, max: 100 })}
                ${input("ductVelocityMS", l.ductVelocity, "m/s", d.ductVelocityMS, { min: 0.5, max: 12 })}
                ${input("defaultUValue", l.defaultUValue, "W/m²K", d.defaultUValue, { min: 0 })}
                ${input("pressureOffsetPercent", l.pressureOffset, "%", d.pressureOffsetPercent, { min: 0, max: 30 })}
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

    const detailTable = (headers, rows) => `
        <div class="table-scroll">
            <table class="tool-result-table">
                <thead><tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr></thead>
                <tbody>
                    ${rows.map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`).join("")}
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

    const postCalculation = async (toolId, payload, lang) => {
        const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS[toolId]}`, {
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
            heatRecoveryPercent: requireNumber(state.heatRecoveryPercent, l.heatRecovery, { min: 0, max: 95 }),
            marginPercent: requireNumber(state.marginPercent, l.renovationMargin, { min: 0, max: 100 }),
            ductVelocityMS: requireNumber(state.ductVelocityMS, l.ductVelocity, { min: 0.5, max: 12 }),
            defaultUValue: requireNumber(state.defaultUValue, l.defaultUValue, { min: 0 }),
            pressureOffsetPercent: requireNumber(state.pressureOffsetPercent, l.pressureOffset, { min: 0, max: 30 }),
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
            formatValue(room.heatingW / 1000, "kW", lang, 1),
            formatValue(room.coolingW / 1000, "kW", lang, 1),
            room.filterConcept || ""
        ]);
        const productRows = (result.productReferences || []).map((item) => [
            item.family,
            item.examples,
            item.url,
            item.note
        ]);
        const roomWarnings = (result.rooms || []).flatMap((room) => (room.warnings || []).map((warning) => `${room.name}: ${warning}`));
        return {
            warnings: (result.warnings || []).concat(roomWarnings),
            cards: [
                { label: l.ahuFlow, value: formatValue(totals.supplyM3H, "m³/h", lang, 0), detail: `${l.extract}: ${formatValue(totals.extractM3H, "m³/h", lang, 0)}` },
                { label: l.outdoorAir, value: formatValue(totals.outdoorAirM3H, "m³/h", lang, 0), detail: `${l.heatRecovery} ${formatValue((result.conditions || {}).heatRecoveryPercent, "%", lang, 0)}` },
                { label: l.heating, value: formatValue(totals.heatingKw, "kW", lang, 1), detail: "concept" },
                { label: l.cooling, value: formatValue(totals.coolingKw, "kW", lang, 1), detail: "concept" },
                { label: l.shaftSize, value: `${formatNumber((totals.indicativeShaftMm || {}).width, lang, 0)} × ${formatNumber((totals.indicativeShaftMm || {}).height, lang, 0)} mm`, detail: `${l.ductDiameter}: ${formatValue(totals.mainDuctDiameterMm, "mm", lang, 0)}` }
            ],
            table: [
                detailTable(
                    [l.roomName, l.roomType, l.supply, l.extract, l.ach, l.pressureRole, l.heating, l.cooling, l.productDirection],
                    roomRows
                ),
                `<h3>${escapeHtml(l.productDirection)}</h3>`,
                detailTable([LANGS[lang].note, "Voorbeelden", "URL", "Status"], productRows)
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
        hvac: calculateHvac,
        renovation: calculateRenovation,
        shafts: calculateShafts,
        offer: calculateOffer,
        acoustics: calculateAcoustics,
        intake: calculateIntake
    };

    const formRenderers = {
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
            resultEl.innerHTML = messageList(t.errors, result.errors, "tool-errors");
            return;
        }
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

    const loadPayload = (payload) => {
        if (!payload || !payload.activeTool || !payload.values || !TOOL_TEXT[payload.activeTool]) {
            throw new Error("Invalid payload");
        }
        renderTool(payload.activeTool);
        setFormState(payload.values);
        renderResults();
    };

    const initApp = () => {
        const app = document.querySelector("[data-tool-app]");
        if (!app) return;
        appState.lang = app.dataset.lang || "nl";
        appState.activeTool = "hvac";
        document.querySelector("[data-tool-page-title]").textContent = LANGS[appState.lang].pageTitle;
        document.querySelector("[data-tool-page-intro]").textContent = LANGS[appState.lang].intro;
        document.querySelector("[data-disclaimer-title]").textContent = LANGS[appState.lang].disclaimerTitle;
        document.querySelector("[data-disclaimer-text]").textContent = LANGS[appState.lang].disclaimer;
        document.querySelector("[data-calculate]").textContent = LANGS[appState.lang].calculate;
        document.querySelector("[data-print]").textContent = LANGS[appState.lang].print;
        document.querySelector("[data-save]").textContent = LANGS[appState.lang].save;
        document.querySelector("[data-load-label]").textContent = LANGS[appState.lang].load;
        document.querySelector("[data-local-save]").textContent = LANGS[appState.lang].localSave;
        document.querySelector("[data-local-load]").textContent = LANGS[appState.lang].localLoad;
        document.querySelector("[data-mail]").textContent = LANGS[appState.lang].mail;

        renderTabs();
        const hashTool = window.location.hash ? window.location.hash.slice(1) : "";
        renderTool(TOOL_TEXT[hashTool] ? hashTool : appState.activeTool);

        document.querySelector("[data-tool-form]").addEventListener("input", scheduleRenderResults);
        document.querySelector("[data-tool-form]").addEventListener("change", scheduleRenderResults);
        document.querySelector("[data-calculate]").addEventListener("click", renderResults);
        document.querySelector("[data-print]").addEventListener("click", () => window.print());
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
            const subject = encodeURIComponent(LANGS[appState.lang].ctaSubject);
            const body = encodeURIComponent(`${LANGS[appState.lang].ctaBody}${getFormState().projectName || ""}`);
            window.location.href = `mailto:info@easuys.be?subject=${subject}&body=${body}`;
        });
    };

    return {
        initApp
    };
});
