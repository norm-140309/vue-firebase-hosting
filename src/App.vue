<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <div class="container">
      <button @click="sortExteriorColors('asc')">Exterior Colors</button>
      <button @click="sortInteriorColors('asc')">Interior Colors</button>
      <button @click="sortVehicleCodes('asc')">Vehicle Codes</button>
      <h2 v-if="mode=='exterior'">Exterior Colors</h2>
      <h2 v-if="mode=='interior'">Interior Colors</h2>
      <h2 v-if="mode=='codes'">Vehicle Codes</h2>
      <ul>
        <li v-for="(item, index) in dspData" :key="item['.key']">
          <!-- <p><label>Item {{index}}:</label></p> -->
          <p v-if="item.code"><label>Code:</label> {{item.code}}</p>
          <p v-if="item.modelID"><label>modelID:</label> {{item.modelID}}</p>
          <p v-if="item.year"><label>year:</label> {{item.year}}</p>
          <div v-if="item.color_id">
            <p><label>color_id:</label> {{item.color_id}} </p>
            <p><label>color_label:</label> {{item.color_label}} </p>
          </div>
          <div v-if="item.trimID">
            <p><label>trimID:</label> {{item.trimID}} </p>
            <p v-if="item.trimColor"><label>trimColor:</label> {{item.trimColor}}</p>
          </div>
          <div v-if="item.interiorCode">
            <p><label>interiorCode:</label> {{item.interiorCode}}</p> 
            <p><label>interiorColor:</label> {{item.interiorColor}}</p>
          </div>
          <p><label>id:</label> {{item._id}}</p>
          <p><label>key:</label> {{item['.key']}}</p>
          <!--
          <div v-if="!person.edit">
            <p>
              {{person.name}}
              <button @click="removeName(person['.key'])">Remove</button>
              <button @click="setEditName(person['.key'])">Edit</button>
            </p>
          </div>
          <div v-else>
            <p>
              <input type="text" v-model="person.name" />
              <button @click="cancelEdit(person['.key'])">Cancel</button>
              <button @click="saveEdit(person)">Save</button>
            </p>
          </div>
          -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { db, colorCodesRef } from "./firebase";
  import AdminTextfield from "./AdminTextfield.vue";
  import _ from 'lodash';

  export default {
    name: "app",
    components: {
      bbAdminTextfield: AdminTextfield
    },
    data() {
      return {
        msg: "Your Vue.js App",
        title: "Blackbird Color Codes Admin",
        allData: [],
        dspData: [],
        mode: ""
      }
    },
    firebase: {
      allData: colorCodesRef
    },
    created: function() {  
      // this.dspData = this.colorCodes;
      // this.sortInteriorColors('asc');

      // this.dspData = this.hasProp(this.dspData, 'interiorColor');
      // this.dspData = _.orderBy(this.dspData, ['modelID', 'trimID', 'trimColor'], ['asc', 'asc', 'asc']);
    },
    methods: {
      hasProp(d, prop) {
        return _.filter(d, function(d){
          if(typeof d[prop] !== "undefined") {
            return d[prop].length; 
          }
          return false;
        });
      },
      sortInteriorColors(direction) {
        this.mode = "interior";
        this.dspData = this.hasProp(this.allData, 'interiorColor');
        this.dspData = _.orderBy(this.dspData, ['modelID', 'trimID', 'trimColor'], [direction, direction, direction]);
      },
      sortExteriorColors(direction) {
        this.mode = "exterior";
        this.dspData = this.hasProp(this.allData, 'color_label');
        this.dspData = _.orderBy(this.dspData, ['color_id'], [direction]);
      },
      sortVehicleCodes(direction) {
        this.mode = "codes";
        this.dspData = this.hasProp(this.allData, 'year');
        this.dspData = _.orderBy(this.dspData, ['modelID', 'code'], [direction, direction]);
      },
      submitName() {
        namesRef.push({ name: this.name, edit: false });
        this.name = "";
      },
      removeName(key) {
        namesRef.child(key).remove();
      },
      setEditName(key) {
        namesRef.child(key).update({ edit: true });
      },
      cancelEdit(key) {
        namesRef.child(key).update({ edit: false });
      },
      saveEdit(person) {
        const key = person['.key'];
        namesRef.child(key).set({ name: person.name, edit: false });
      },
      exists(myData, myVar) {
        newData = _.filter(myData, [myVar])
        return _.isObject(myData[myVar]);
      } 
    }
  };
</script>

<style lang="scss">
li { text-align: left; padding: 1px; }
li button { float: right; margin-right: 5px; }
li p { width:30%; margin: 8px auto; }
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-weight: normal;
  font-size: 10px;
}

h2 { margin: 35px 0 0px 0; }

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
button {
  background-color: transparent;
  border: 2px solid #999;
  padding: 6px;
}
input {
  padding: 7px;
  border: 0.5px solid #999;
}
label {
  font-weight: bold;
}
</style>
