/// <reference types="cypress" />
const { Given, When, And, Then } = require("@badeball/cypress-cucumber-preprocessor");

const url = "http://renalcare.zeus-sh.com/";

Given('usuario na tela de login', () =>{
    cy.visit(url);
})
/*
When('inserir o email e uma senha', ()=>{

})

And('clicar no botao entrar', ()=>{

})

Then('login sera feito', ()=>{

})*/