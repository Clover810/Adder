let string1, string2, num1, num2, num3 ;

function add() {
	// 入力フォームから文字列を取得
	string1 = document.getElementById("input1").value ;
	string2 = document.getElementById("input2").value ;
	
	// 取得した文字列を数値に変換
	num1 = Number(string1) ;
	num2 = Number(string2) ;
	
	// それを計算した結果を画面に表示させる
	num3 = num1 + num2 ;
	num3 *= 100000000 ;
	num3 = Math.floor(num3) ;
	num3 /= 100000000 ;
	document.getElementById("Ans").innerHTML = num3 ;
}

function clearText() {
	// すべての文字列をリセット
	document.getElementById("input1").value = "" ;
	document.getElementById("input2").value = "" ;
	document.getElementById("Ans").innerHTML = "Answer" ;
}