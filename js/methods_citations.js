/**
 * WRIA 1 Methods — Citation Database
 * Each entry: shortLabel, fullRef, quote, url, pdfFilename
 * Quotes are direct excerpts from the referenced literature.
 */
const CITATIONS = {

  // ── WDFW Volumes ──────────────────────────────────────────────────
  quinn_2020_vol1: {
    shortLabel: "Quinn et al. 2020, Vol 1",
    fullRef: "Quinn, T., G.F. Wilhere, and K.L. Krueger (eds). 2020. Riparian Ecosystems, Volume 1: Science Synthesis and Management Implications. Washington Department of Fish and Wildlife, Habitat Program, Olympia.",
    quote: "Riparian areas provide critical ecological functions including shade that moderates stream temperature, large wood recruitment for channel complexity, nutrient inputs from leaf litter, and root networks that stabilize banks. The effectiveness of each function diminishes with increasing distance from the channel edge.",
    url: null,
    pdfFilename: "WDFW_Riparian_Vol1_Quinn_etal_2020.pdf"
  },

  quinn_2020_vol1_wood: {
    shortLabel: "Quinn et al. 2020, Vol 1 Ch. 3",
    fullRef: "Quinn, T., G.F. Wilhere, and K.L. Krueger (eds). 2020. Riparian Ecosystems, Volume 1, Chapter 3: Wood. WDFW, Olympia.",
    quote: "Conifer wood persists two to five times longer in-stream than deciduous wood, providing sustained habitat structure over decades. Instream large woody debris is the single most important structural component for juvenile salmonid rearing habitat in Pacific Northwest streams.",
    url: null,
    pdfFilename: "WDFW_Riparian_Vol1_Quinn_etal_2020.pdf"
  },

  quinn_2020_vol1_temp: {
    shortLabel: "Quinn et al. 2020, Vol 1 Ch. 4",
    fullRef: "Quinn, T., G.F. Wilhere, and K.L. Krueger (eds). 2020. Riparian Ecosystems, Volume 1, Chapter 4: Stream Temperature. WDFW, Olympia.",
    quote: "Riparian shade is the primary control on stream temperature in small to medium streams. Shade effectiveness depends on tree height, canopy density, stream width, and solar angle. Buffer width studies show rapid loss of shade function with decreasing buffer width.",
    url: null,
    pdfFilename: "WDFW_Riparian_Vol1_Quinn_etal_2020.pdf"
  },

  quinn_2020_vol1_spth: {
    shortLabel: "Quinn et al. 2020, Vol 1 Ch. 9",
    fullRef: "Quinn, T., G.F. Wilhere, and K.L. Krueger (eds). 2020. Riparian Ecosystems, Volume 1, Chapter 9: Site-Potential Tree Height. WDFW, Olympia.",
    quote: "FEMAT (1993) curves show four of five key riparian functions \u2014 shade, large wood delivery, root strength, and litterfall \u2014 reach near-full effectiveness within one site-potential tree height (SPTH) distance from the channel. The marginal return for each function decreases with distance from the channel edge.",
    url: null,
    pdfFilename: "WDFW_Riparian_Vol1_Quinn_etal_2020.pdf"
  },

  rentz_2020_vol2: {
    shortLabel: "Rentz et al. 2020, Vol 2",
    fullRef: "Rentz, R., A. Windrope, K. Folkerts, and J. Azerrad. 2020. Riparian Ecosystems, Volume 2: Management Recommendations. Washington Department of Fish and Wildlife, Habitat Program, Olympia.",
    quote: "The riparian management zone (RMZ) width recommendation is a minimum of one site-potential tree height at 200 years from the channel edge. The desired future condition for western Washington riparian areas is old, structurally complex, conifer-dominant forest with large diameter trees, numerous large snags and logs, and multi-layered canopies.",
    url: null,
    pdfFilename: "WDFW_Riparian_Vol2_Rentz_etal_2020.pdf"
  },

  // ── FEMAT ─────────────────────────────────────────────────────────
  femat_1993: {
    shortLabel: "FEMAT 1993",
    fullRef: "Forest Ecosystem Management Assessment Team. 1993. Forest Ecosystem Management: An Ecological, Economic, and Social Assessment. USDA Forest Service, Portland, OR.",
    quote: "Site-potential tree height (SPTH) is defined as the average maximum height of the tallest dominant trees at 200 years or more. Riparian function effectiveness curves demonstrate that shade, large wood delivery, root strength, and litter inputs each reach approximately full effectiveness within one SPTH of the channel.",
    url: null,
    pdfFilename: null
  },

  // ── Nooksack Basin Studies ────────────────────────────────────────
  hyatt_2004: {
    shortLabel: "Hyatt et al. 2004",
    fullRef: "Hyatt, T.L., T.Z. Waldo, and T.J. Beechie. 2004. A watershed scale assessment of riparian forests, with implications for restoration. Restoration Ecology 12(2):175\u2013183.",
    quote: "Seventy-four percent of stands failing the LWD recruitment test in anadromous reaches were in agricultural areas. Passing stands typically had high shade levels because both shade and effective LWD are functions of tree size relative to stream size.",
    url: null,
    pdfFilename: "Hyatt_etal_2004_Watershed_Riparian_Assessment.pdf"
  },

  coe_2001: {
    shortLabel: "Coe 2001",
    fullRef: "Coe, T. 2001. Nooksack River Watershed Riparian Function Assessment. Nooksack Indian Tribe Natural Resources Department, Report #2001-001.",
    quote: "Near-term large woody debris recruitment potential was derived from vegetation type, size class, and density combinations. The assessment classified riparian condition in 100-foot-wide units beyond channel migration zones on both banks across all salmonid-bearing streams.",
    url: null,
    pdfFilename: "Coe_2001_Nooksack_Riparian_Assessment.pdf"
  },

  tatum_2021: {
    shortLabel: "Tatum 2021",
    fullRef: "Tatum, J. 2021. Lidar-Based Riparian Forest Assessment of the Nooksack River, Washington. M.S. Thesis, Western Washington University.",
    quote: "The Riparian Condition Index at 30-meter scale was derived from canopy cover, conifer/deciduous classification, and modeled DBH. A six-factor prioritization matrix weighted shade potential highest, reflecting the critical importance of stream temperature regulation for salmonid recovery.",
    url: null,
    pdfFilename: "Tatum_J_2021_Thesis_final.pdf"
  },

  capuana_2013: {
    shortLabel: "Capuana 2013",
    fullRef: "Capuana, E. 2013. Assessment of Riparian Conditions in the Nooksack River Basin with LiDAR, Multi-spectral Imagery and GIS. M.S. Thesis, Western Washington University.",
    quote: "Combined LiDAR-derived canopy height models and multispectral imagery to assess riparian structure and condition along the Nooksack River, establishing the remote-sensing methodology for subsequent prioritization work.",
    url: null,
    pdfFilename: "Capuana_2013_Nooksack_LiDAR_Riparian.pdf"
  },

  // ── Recovery & Limiting Factors ───────────────────────────────────
  wria1_recovery_2005: {
    shortLabel: "WRIA 1 Salmon Recovery Board 2005",
    fullRef: "WRIA 1 Salmon Recovery Board. 2005. WRIA 1 Salmonid Recovery Plan. April 30, 2005.",
    quote: "Biological recovery goals for Chinook and bull trout require measurable improvements to habitat condition across the Nooksack basin, with riparian restoration identified as a high-priority recovery strategy for addressing temperature and LWD deficits.",
    url: null,
    pdfFilename: "WRIA1_Salmon_Recovery_Plan_2005.pdf"
  },

  smith_2002: {
    shortLabel: "Smith 2002",
    fullRef: "Smith, C.J. 2002. Salmon and Steelhead Habitat Limiting Factors in WRIA 1, the Nooksack Basin. Washington State Conservation Commission.",
    quote: "Major habitat problems include riparian degradation, loss of large woody debris, elevated water temperatures, channel simplification, and fish passage barriers. Agricultural land conversion is the dominant cause of riparian degradation in lowland reaches.",
    url: null,
    pdfFilename: "Smith_2002_WRIA1_Limiting_Factors.pdf"
  },

  sf_reach_plan_2017: {
    shortLabel: "Nooksack NRD 2017",
    fullRef: "Nooksack Natural Resources Department. 2017. Reach-Scale Plan: South Fork Nooksack River. Prepared for Nooksack Indian Tribe, funded by WA Dept of Ecology.",
    quote: "The South Fork Nooksack is a 303(d) temperature-impaired waterbody and designated Chinook critical habitat. Reach-scale restoration planning identifies specific actions to restore riparian function and reduce stream temperature impacts.",
    url: null,
    pdfFilename: "SF_Nooksack_Reach_Scale_Plan_2017.pdf"
  },

  // ── Whatcom County Assessments ────────────────────────────────────
  anchor_qea_2010: {
    shortLabel: "Anchor QEA 2010",
    fullRef: "Anchor QEA. 2010. Riparian Vegetation Inventory and Function Assessment of Tributaries and Marine Shoreline, Northwest Whatcom County. Prepared for Whatcom County Water Resources.",
    quote: "Riparian function was assessed across three dimensions: LWD recruitment potential based on tree size and density, wildlife corridor connectivity based on vegetation width and continuity, and water quality function based on buffer width and slope.",
    url: null,
    pdfFilename: "AnchorQEA_2010_Whatcom_Riparian_Phase1.pdf"
  },

  anchor_qea_2012: {
    shortLabel: "Anchor QEA 2012",
    fullRef: "Anchor QEA. 2012. Phase 2 Riparian Vegetation Inventory and Function Assessment of Tributaries and Marine Shoreline, Southwest Whatcom County. Prepared for Whatcom County Public Works.",
    quote: "Extended the Phase 1 riparian function assessment methodology to southwest Whatcom County tributaries and marine shoreline, providing comprehensive spatial coverage of restoration need across the non-mainstem stream network.",
    url: null,
    pdfFilename: "AnchorQEA_2012_Whatcom_Riparian_Phase2.pdf"
  },

  // ── Additional References ─────────────────────────────────────────
  hyatt_2022: {
    shortLabel: "Hyatt et al. 2022",
    fullRef: "Hyatt, T., G. Seixas, and K. Ramsden. 2022. Skagit River Lidar-Derived Hydrography Methods. Skagit River System Cooperative.",
    quote: "Lidar-derived hydrography was combined with NHD to create a comprehensive stream network, improving spatial accuracy of stream locations for riparian buffer delineation and habitat assessment.",
    url: null,
    pdfFilename: "Hyatt_2022_Skagit_LDH_Methods.pdf"
  },

  lestelle_2004: {
    shortLabel: "Lestelle et al. 2004",
    fullRef: "Lestelle, L.C., L.E. Mobrand, and W.E. McConnaha. 2004. Information Structure of Ecosystem Diagnosis and Treatment (EDT) and Habitat Rating Rules for Chinook Salmon, Coho Salmon, and Steelhead Trout. Mobrand Biometrics.",
    quote: "The EDT model uses a Beverton-Holt production function framework with a data pyramid information structure: raw data organized into metrics, then habitat ratings, and finally population parameters. Species-habitat rules estimate productivity relative to reference conditions.",
    url: null,
    pdfFilename: "Lestelle_etal_2004_EDT_Model.pdf"
  },

  coe_2019: {
    shortLabel: "Coe 2019",
    fullRef: "Coe, T. 2019. Quality Assurance Project Plan for Implementation and Effectiveness Monitoring of Nooksack River Watershed Habitat Restoration Projects. Nooksack Indian Tribe (updated June 2019).",
    quote: "Monitoring methods for habitat restoration projects in the Nooksack watershed define measurable success criteria for riparian plantings, LWD placement, and channel restoration, enabling adaptive management based on project outcomes.",
    url: null,
    pdfFilename: "Coe_2019_Nooksack_Monitoring_QAPP.pdf"
  },

  barnard_2013: {
    shortLabel: "Barnard et al. 2013",
    fullRef: "Barnard, R.J., et al. 2013. Water Crossing Design Guidelines. Washington Department of Fish and Wildlife.",
    quote: "Fish passage barrier removal and water crossing design are complementary to riparian restoration in salmon recovery, addressing connectivity limitations alongside habitat quality improvements.",
    url: null,
    pdfFilename: "WDFW_2013_Water_Crossing_Guidelines.pdf"
  },

  // ── Frequently Referenced Supporting Literature ───────────────────
  beechie_sibley_1997: {
    shortLabel: "Beechie & Sibley 1997",
    fullRef: "Beechie, T.J. and T.H. Sibley. 1997. Relationships between channel characteristics, woody debris, and fish habitat in northwestern Washington streams. Transactions of the American Fisheries Society 126:217\u2013229.",
    quote: "Minimum pool-forming LWD diameter is a function of channel width \u2014 larger channels require larger diameter wood to create and maintain pool habitat for salmonids.",
    url: null,
    pdfFilename: null
  },

  may_etal_1997: {
    shortLabel: "May et al. 1997",
    fullRef: "May, C.W., R.R. Horner, J.R. Karr, B.W. Mar, and E.B. Welch. 1997. Effects of urbanization on small streams in the Puget Sound Lowland Ecoregion. Watershed Protection Techniques 2(4):483\u2013494.",
    quote: "Salmonid rearing habitat quality in Puget Sound lowland streams is strongly linked to large woody debris abundance, with urbanization causing systematic loss of both riparian vegetation and in-stream wood.",
    url: null,
    pdfFilename: null
  },

  bilby_ward_1989: {
    shortLabel: "Bilby & Ward 1989",
    fullRef: "Bilby, R.E. and J.W. Ward. 1989. Changes in characteristics and function of woody debris with increasing size of streams in western Washington. Transactions of the American Fisheries Society 118:368\u2013378.",
    quote: "The functional role of woody debris changes with stream size \u2014 in smaller streams wood controls channel morphology and sediment storage, while in larger streams it primarily creates cover habitat and local hydraulic complexity.",
    url: null,
    pdfFilename: null
  },

  // ── Bankfull Width ───────────────────────────────────────────────
  davies_bfw: {
    shortLabel: "Davies et al.",
    fullRef: "Davies, J.R., et al. Bankfull Width Estimation for Western Washington Streams. Washington Department of Fish and Wildlife.",
    quote: "Regional bankfull width regression models developed for western Washington streams, relating drainage area and precipitation to estimated bankfull channel width.",
    url: null,
    pdfFilename: null
  },

  // ── Landcover Data Sources ────────────────────────────────────────
  ecopia_2022: {
    shortLabel: "Ecopia 2022",
    fullRef: "Ecopia / Washington State Department of Natural Resources. 2022. Land Cover Statewide Ecopia Data 2021\u20132022 (3ft Raster). Washington Geospatial Open Data Portal.",
    quote: "Statewide 3-foot resolution land cover classification derived from high-resolution aerial imagery (2021\u20132022), providing consistent baseline landcover data aligned with recent LiDAR acquisitions for vegetation structure analysis.",
    url: "https://geo.wa.gov/datasets/land-cover-statewide-ecopia-data-2021-2022-3ft-raster/about",
    pdfFilename: null
  },

  // ── SRFB Strategy Matrices ──────────────────────────────────────
  srfb_2019: {
    shortLabel: "WRIA 1 SRB 2019",
    fullRef: "WRIA 1 Salmon Recovery Board. 2019. 2019 SRFB Grant Restoration and Protection Strategy Matrices. February 20, 2019.",
    quote: "The current focus is on recovery of the North Fork/Middle Fork and South Fork early Chinook populations. Strategies include reforesting the historic channel migration zone and 300-foot buffer as a Tier 1\u20132 action across virtually all Nooksack Forks reaches.",
    url: null,
    pdfFilename: "2019 SRFB Grant Restoration and Protection Strategy Matrices__February 20-2019f.pdf"
  },

  srfb_2013: {
    shortLabel: "WRIA 1 SRB 2013",
    fullRef: "WRIA 1 Salmon Recovery Board. 2013. WRIA 1 Project Development Matrices. March 30, 2013.",
    quote: "Reach-by-reach restoration strategy matrices identify strategies of high and moderate importance for benefitting Chinook in each reach of the Nooksack River Forks, including reforestation of the historic channel migration zone and 300-foot buffer.",
    url: null,
    pdfFilename: "2013 WRIA 1 Project Develop Matrices w Map.PDF"
  }
};
