'use strict'

const x = document.getElementById('login')
const y = document.getElementById('register')
const z = document.getElementById('btn')

function register() {
	x.style.left = '-400px'
	y.style.left = '50px'
	z.style.left = '110px'
	z.style.width = '110px'
}

function login() {
	x.style.left = '50px'
	y.style.left = '450px'
	z.style.left = '0'
	z.style.width = '90px'
}