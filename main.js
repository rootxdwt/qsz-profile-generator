//built by xdwhat
var a=1;
while(a<12) {
	eval("var input"+a+"=''")
	a++
}
//canvas
function erase(){
	var c = document.getElementById("canvas")
	var ctx = c.getContext("2d")
	ctx.clearRect(0, 0, canvas.width, canvas.height)
}
const img = new Image()
const tempImage = new Image()
img.src = './tmp.png'
function drwimg() {
	window.c = document.getElementById("canvas")
	window.ctx = c.getContext("2d")
	erase()
	if(document.getElementById('previewlayer').getAttribute('src') == "") {

	}else {
		tempImage.src = document.getElementById('previewlayer').getAttribute('src')
		ctx.drawImage(tempImage, 350, 0, 416, 235)
	}
	ctx.drawImage(img, 0, 0)
	ctx.font = '13px Gugi'
	ctx.fillStyle = "white"
		ctx.fillText(input1, 50, 20)
		ctx.fillText(input2, 50, 40)
		ctx.fillText(input3, 50, 60)
		ctx.fillText(input4, 50, 80)
		ctx.fillText(input5, 50, 100)
		ctx.fillText(input6, 50, 120)
		ctx.fillText(input7, 50, 140)
		ctx.fillText(input8, 50, 160)
		ctx.fillText(input9, 50, 180)
		ctx.fillText(input10, 50, 200)
		ctx.font = '25px Gugi'
		ctx.fillText(input11, 550, 220)
}
function output() {
	var html = " "
	html += "<img src='" + c.toDataURL() + "' alt='from canvas'/>"
	var pageStyle = "<style>body{margin:0; padding: 0;}</style>"
	var tab = window.open()
	tab.document.write(html + pageStyle)
}
//ui
function build() {
	if (document.getElementById('previewlayer').getAttribute('src') == "") {
		if (confirm("이미지를 삽입하지 않으셨습니다. 계속할까요?") == true) {
			output()
		} else {
			document.getElementById('imgins').style.animation = "lnshow 3s";
		}
	} else {
		output()
	}
}
var i = 1;
var placelist = new Array("CPU", "M/B", "RAM", "GPU", "SSD", "HDD", "PSU", "C/S", "C/L", "OS", "NAME");
function next() {
	if (i == 12) {
		build()
	}
	if (i == 11) {
		document.getElementById('nextbtn').value = "Build"
		eval("window.input"+i+"='"+pctxt.value+"';")
		drwimg()
		i++
	}
	else if(i<11){
		if(eval("input"+(i+1)) !== ""){
			pctxt = document.getElementsByName('inputarea')[0]
			eval("window.input"+(i)+"='"+pctxt.value+"';")
			console.log(i)
			pctxt.value=eval("input"+(i+1))
			drwimg()
			i++
		}else {
			pctxt = document.getElementsByName('inputarea')[0]
			eval("window.input"+i+"='"+pctxt.value+"';")
			pctxt.placeholder = placelist[i]
			pctxt.value=""
			console.log(i)
			drwimg()
			i++
		}
	}
}
function prev() {
	window.i = i-1
	if (i == 0) {
		alert("이전 값이 없습니다")
		i++
	}else{
		pctxt.placeholder = placelist[i-1]
		eval("pctxt.value = input"+i+";")
		eval("window.input"+(i)+"='"+pctxt.value+"';")
	}

}
function enter() {
	if (window.event.keyCode == 13) {
		next()
	}
}
function imgadd() {
	if (document.getElementById('imgbtn').innerHTML == "Add img") {
		document.getElementById('imgins').style.animation = "imgins 2s"
		document.getElementById('imgins').addEventListener("webkitAnimationEnd", previewFile)
	}else if (document.getElementById('imgbtn').innerHTML == "Change") {
		previewFile()
	}
}

function previewFile() {
	const preview = document.getElementById('previewlayer')
	preview.style.display = "inline"
	const file = document.querySelector('input[type=file]').files[0]
	const reader = new FileReader()

	reader.addEventListener("load", function () {
		preview.src = reader.result
	}, false)

	if (file) {
		reader.readAsDataURL(file)
		document.getElementById('imgbtn').innerHTML = "Change"
	}
}
