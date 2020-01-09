'use strict';

const validator = require('./lib/validator.js');

validator.isValid();

const personRules = {
    fields: {
      id: {type: 'string', required: true},
      name: {type: 'string', required: true},
      age: {type: 'number', required: true},
      children: { type: 'array', valueType: 'string' },
    },
  };
  
  const susan = {
    id:'123-45-6789',
    name:'Susan McDeveloperson',
    age: 37,
    children:[],
  };
  
  const fred = {
    id:38,
    name:'Freddy McCoder',
    children:[],
  };

  const fredValid =  validator.isValidV2(fred,personRules);
  const susanValid = validator.isValidV2(susan,personRules);