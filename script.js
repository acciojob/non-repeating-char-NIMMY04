function firstNonRepeatedChar(str) {
 let n= str.length();
	for(i=0;i<n;i++){
		let found= true;
		for(j=i+1;j<n;j++){
			if(s[i]===s[j])
				found == false;
			break;
		}
		if(found){
			return i;
		}
	}
	return -1;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
