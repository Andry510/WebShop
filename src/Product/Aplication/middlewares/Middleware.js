const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const sharp = require('sharp')
const fs = require('fs')
const { v4: uuid } = require('uuid')


module.exports = {express, cors, morgan, multer, sharp, cloudinary, fs, uuid }