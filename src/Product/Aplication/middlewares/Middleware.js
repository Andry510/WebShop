const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const sharp = require('sharp')


module.exports = {express, cors, morgan, multer, sharp,cloudinary }