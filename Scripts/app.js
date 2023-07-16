const { createApp } = Vue;

createApp({
  data() {

    let cation = {
      id: 128,
      name: "Ion hidrazinio (2+)",
      formula: "[+]H3NNH3[+]",
      calculatedMolarWeight: true,
      molarWeight: "34.062",
      density: null,
      meltingPoint: null,
      boilingPoint: null,
      acidType: "\u00c1cido d\u00e9bil",
      chargeType: "Cati\u00f3n",
      constants: [
        {
          reportedValue: "pka",
          kaValues: ["0.537", "1.15E-8", "3.16E-9", null, null],
          pkaValues: ["0.27", "7.94", "8.50", null, null],
          reference: {
            author: "Speight, J.",
            citation:
              "Speight, J. (2016). Lange\u2019s Handbook of Chemistry, Seventeenth Edition. McGraw Hill Professional.",
          },
        },
      ],
    }
    let multiple_references= {
      id: 7,
      name: "\u00c1cido ac\u00e9tico",
      formula: "CH3COOH",
      calculatedMolarWeight: false,
      molarWeight: "60.050",
      density: "1.045",
      meltingPoint: "16.64",
      boilingPoint: "117.90",
      acidType: "\u00c1cido d\u00e9bil",
      chargeType: "Neutro",
      constants: [
        {
          reportedValue: "ka",
          kaValues: ["1.8E-5", null, null, null, null],
          pkaValues: ["4.74", null, null, null, null],
          reference: {
            author: "Chang, R.",
            citation: "Chang, R., & Goldsby, K. A. (2013). Qu\u00edmica.",
          },
        },
        {
          reportedValue: "ka",
          kaValues: ["1.75E-5", null, null, null, null],
          pkaValues: ["4.76", null, null, null, null],
          reference: {
            author: "Skoog, D.",
            citation:
              "Skoog, D., West, D., Holler, F., & Crouch, S. (2013). Fundamentals of Analytical Chemistry. Cengage Learning.",
          },
        },
        {
          reportedValue: "pka",
          kaValues: ["1.74E-5", null, null, null, null],
          pkaValues: ["4.76", null, null, null, null],
          reference: {
            author: "Montuenga, C.",
            citation:
              "Montuenga, C. (1979). Formaci\u00f3n de Complejos en Qu\u00edmica Anal\u00edtica. Alhambra, S. A.",
          },
        },
      ],
    }
    let neutro ={
      id: 164,
      name: "Diimidotrifosf\u00e1to de hidr\u00f3geno",
      formula: "(HO)2PO(NH)PO(OH)(NH)PO(OH)2",
      calculatedMolarWeight: true,
      molarWeight: "255.983",
      density: null,
      meltingPoint: null,
      boilingPoint: null,
      acidType: "\u00c1cido d\u00e9bil",
      chargeType: "Neutro",
      constants: [
        {
          reportedValue: "pka",
          kaValues: ["0.1", "0.01", "0.000933", "2.45E-7", "1.45E-10"],
          pkaValues: ["1.00", "2.00", "3.03", "6.61", "9.84"],
          reference: {
            author: "Speight, J.",
            citation:
              "Speight, J. (2016). Lange\u2019s Handbook of Chemistry, Seventeenth Edition. McGraw Hill Professional.",
          },
        },
      ],
    }

    let anion = {
      id: 14,
      name: "Ion ascorbato",
      formula: "C6H7O[-]6",
      calculatedMolarWeight: true,
      molarWeight: "175.116",
      density: null,
      meltingPoint: null,
      boilingPoint: null,
      acidType: "Base d\u00e9bil",
      chargeType: "Ani\u00f3n",
      constants: [
        {
          reportedValue: "ka",
          kaValues: ["1.3E-10", null, null, null, null],
          pkaValues: ["9.89", null, null, null, null],
          reference: {
            author: "Chang, R.",
            citation: "Chang, R., & Goldsby, K. A. (2013). Qu\u00edmica.",
          },
        },
      ],
    }

    let informacion = [
      {
        id: 86,
        name: "\u00c1cido tioci\u00e1nico",
        formula: "HSCN",
        calculatedMolarWeight: false,
        molarWeight: "59.090",
        density: null,
        meltingPoint: "5.00",
        boilingPoint: null,
        acidType: "\u00c1cido d\u00e9bil",
        chargeType: "Neutro",
      },
      {
        id: 87,
        name: "\u00c1cido tiosulf\u00farico",
        formula: "H2S2O3",
        calculatedMolarWeight: false,
        molarWeight: "114.150",
        density: "1.900",
        meltingPoint: "48.00",
        boilingPoint: "100.00",
        acidType: "\u00c1cido d\u00e9bil",
        chargeType: "Neutro",
      },
      {
        id: 88,
        name: "\u00c1cido tricloroac\u00e9tico",
        formula: "Cl3CCOOH",
        calculatedMolarWeight: false,
        molarWeight: "163.380",
        density: "1.600",
        meltingPoint: "57.50",
        boilingPoint: "195.50",
        acidType: "\u00c1cido d\u00e9bil",
        chargeType: "Neutro",
      },
      {
        id: 89,
        name: "Ion trimetil amonio",
        formula: "(CH3)3NH[+]",
        calculatedMolarWeight: true,
        molarWeight: "60.120",
        density: null,
        meltingPoint: null,
        boilingPoint: null,
        acidType: "\u00c1cido d\u00e9bil",
        chargeType: "Cati\u00f3n",
      },
      {
        id: 90,
        name: "\u00c1cido clorh\u00eddrico",
        formula: "HCl",
        calculatedMolarWeight: false,
        molarWeight: "36.460",
        density: "1.526",
        meltingPoint: "-114.18",
        boilingPoint: "-85.05",
        acidType: "\u00c1cido fuerte",
        chargeType: "Neutro",
      },
      {
        id: 91,
        name: "\u00c1cido n\u00edtrico",
        formula: "HNO3",
        calculatedMolarWeight: false,
        molarWeight: "63.020",
        density: "1.549",
        meltingPoint: "-41.59",
        boilingPoint: "83.00",
        acidType: "\u00c1cido fuerte",
        chargeType: "Neutro",
      },
      {
        id: 92,
        name: "\u00c1cido percl\u00f3rico",
        formula: "HClO4",
        calculatedMolarWeight: false,
        molarWeight: "100.460",
        density: "1.768",
        meltingPoint: "-112.00",
        boilingPoint: "19.00",
        acidType: "\u00c1cido fuerte",
        chargeType: "Neutro",
      },
      {
        id: 93,
        name: "Hidr\u00f3xido de sodio",
        formula: "NaOH",
        calculatedMolarWeight: false,
        molarWeight: "40.000",
        density: "2.130",
        meltingPoint: "323.00",
        boilingPoint: "1388.00",
        acidType: "Base fuerte",
        chargeType: "Neutro",
      },
      {
        id: 94,
        name: "Hidr\u00f3xido de potasio",
        formula: "KOH",
        calculatedMolarWeight: false,
        molarWeight: "56.110",
        density: "2.044",
        meltingPoint: "406.00",
        boilingPoint: "1323.00",
        acidType: "Base fuerte",
        chargeType: "Neutro",
      },
      {
        id: 95,
        name: "Hidr\u00f3xido de bario",
        formula: "Ba(OH)2",
        calculatedMolarWeight: false,
        molarWeight: "315.480",
        density: "2.180",
        meltingPoint: "78.00",
        boilingPoint: null,
        acidType: "Base fuerte",
        chargeType: "Neutro",
      },
      {
        id: 96,
        name: "Hidr\u00f3xido de litio",
        formula: "LiOH",
        calculatedMolarWeight: false,
        molarWeight: "23.950",
        density: "1.450",
        meltingPoint: "471.20",
        boilingPoint: "1626.00",
        acidType: "Base fuerte",
        chargeType: "Neutro",
      },
    ],

    specie = neutro
    
    return {

      isMobile: /Mobile/.test(navigator.userAgent),
      currentSection: "",
      species: informacion,
      specie,
      wordFilter: null,

      informacion: informacion
      

    };
  },
  mounted() {},
  methods: {
    /**
     * Display the clicked menu in mobile view
     * @param {String} type - Type of menu
     */
    showMenu(type) {
      // Check the type menu and add or remove class to show menu
      type == "burger" && this.curretSection == "graph"
        ? (navigationMenu.classList.toggle("show-menu"),
          settingsButton.classList.toggle("hide-button"))
        : type == "burger"
        ? navigationMenu.classList.toggle("show-menu")
        : settingsMenu.classList.toggle("show-menu");

      // Explicit code for burger menu
      // if (type=="burger" && this.currentSection=="graph") {
      //     navigationMenu.classList.toggle("show-menu")
      //     settingsButton.classList.toggle("hide-button")
      // }else if( type=="burger"){
      //     navigationMenu.classList.toggle("show-menu")
      // }else{
      //     settingsMenu.classList.toggle("show-menu");
      // }

      // Remove scroll in body in desktop, more estetic
      if (!this.isMobile) {
        body.classList.toggle("non-scroll");
      }
    },

    filterByName(){
      if(this.wordFilter == null){
        this.species = informacion;
      }
      else{
        let filteredTable = []
        console.log(this.wordFilter)
        for (n in this.informacion){
          
          let nameString = this.informacion[n].name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
          console.log(nameString)
          if(nameString.includes(this.wordFilter.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())){
            console.log("includes")
            filteredTable.push(this.informacion[n]);
          }
        }
        console.log(filteredTable)
        this.species = filteredTable
      }
     
    },

    checkNotNull(info) {
      info != null ? (value = info) : (value = "-");
      return value;
    },

    openSpeciesInfo(selectedSpecie) {
      // Grab the specie's id to look for it in the data base
      selectedSpecie.id = this.selectedSpecieID;

      // Petition for specie's data to display in new view
    },
  },
}).mount("#app");
