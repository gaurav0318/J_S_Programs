function angle_Types(angle)
{
	if(angle<90)
	return "Acute";
	if(angle==90)
	return "Right";
        if(angle<180)
        return "Obtuse";
        if(angle==180)
        return "Straight";
	else
	return "Not defined";
}

//return angles();

console.log(angle_Types(45));
console.log(angle_Types(78));
console.log(angle_Types(200));

