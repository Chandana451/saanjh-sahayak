const router = require('express').Router();
const {getReport, getPatient, setPatient, getPatients, getOldageHomeInfo,getDates,savePrecautions,getPrevReports,getreports,editPatient,login,removePatient} = require('./controllers/get_set')
const {getParameters,analysis,chatbot} = require('./controllers/LLM')
const {uploadpdf,pdfid,pdfparse,reciver}=require('./controllers/pdfs')
router.get('/getreport/:id', getReport)
router.post('/setPatient',setPatient)
router.get('/getpatient/:id', getPatient)
router.get('/getpatients', getPatients)
router.get('/getoldagehomeinfo', getOldageHomeInfo)
 router.post('/uploadpdf', uploadpdf)
 router.get('/pdfid/:id',pdfid)
 router.post('/pdfparse', pdfparse)
 router.post('/reciver',reciver)
 router.post('/getparameters',getParameters)
 router.post('/analysis',analysis);
 router.get('/getdates/:id',getDates)
 router.post('/saveprecautions',savePrecautions)
 router.post('/getprevreports',getPrevReports)
 router.get('/getreports',getreports)
 router.post('/editPatient',editPatient)
 router.post('/chatbot',chatbot)
 router.post('/login',login)
 router.post('/removepatient',removePatient)
module.exports = router
