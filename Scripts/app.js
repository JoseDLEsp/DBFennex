const { createApp } = Vue;

createApp({
  created: function(){
    this.getSpecies();
  },
  data() {

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
    specie = neutro

    return {

      isMobile: /Mobile/.test(navigator.userAgent),
      currentSection: "",
      species: [],
      specie,
      wordFilter:"",
      selectedAuthor: "Todos",
      selectedCharge: "Todos",
      selectedAcidType: "Todos"

    };
  },
  mounted() {},
  computed: {
    // Variable array that returns the species based on the filters set
    filteredSpecies(){
      return this.species.filter(specie => this.normalizeString(specie.name).includes(this.normalizeString(this.wordFilter)) 
      && this.chargeFilter(specie)
      && this.acidTypeFilter(specie));
    }
  },
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


    // Makes a request to de Fennex api to get all the species displayed on the table
    getSpecies(){
      axios.get("http://54.86.87.78/api/species")
      .then(response => {
          console.log(response.data);
           this.species = response.data.data;
      })
      .catch(e => {
          console.log(e)
      })
    },

// ************* FILTERS ***************

    // Turns string intro lowercase and takes off special characters such as accents
    normalizeString(string){
      return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    },
    
    // Checks if the sent specie's charge matches with the filter selection.
    chargeFilter(specie){
      if(this.selectedCharge == "Todos"){return true}
      else if (this.selectedCharge == specie.chargeType ){return true}
      else{return false}
    },

    // Checks if the sent specie's acid type matches with the filter selection.
    acidTypeFilter(specie){
      if(this.selectedAcidType == "Todos"){return true}
      else if (this.selectedAcidType == specie.acidType ){return true}
      else{return false}
    },

    // Takes off all the filters.
    resetFilters(){
      this.selectedAcidType = "Todos"
      this.selectedCharge = "Todos"
      this.wordFilter = ""
    },

    // Checks if a sent string is null, and if so, returns a "-" string.
    checkNotNull(info) {
      info != null ? (value = info) : (value = "-");
      return value;
    },
  },
}).mount("#app");
