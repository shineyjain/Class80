var student_array=[];
function Submit(){
var display_student_array=[];
for(var J=1;J<=4;J++)
{
    var name=document.getElementById("Name" +J) .value;
    student_array.push(name);

}
console.log(student_array);
var lenght_student_array=student_array.length;
console.log(lenght_student_array);
for(var k=0;k<lenght_student_array;k++)
{
display_student_array.push("<h4>name - "+student_array[k]+"</h4>" );
console.log(display_student_array);
}
console.log(display_student_array);
document.getElementById("Display_Name_with_commas").innerHTML=display_student_array;
var remove_commas=display_student_array.join(" ");
console.log(remove_commas);
document.getElementById("Display_Name_without_commas").innerHTML=remove_commas;
document.getElementById("Submit").style.display="none";
document.getElementById("Sort").style.display="inline-block";
}
function Sort()
{
 student_array.sort();
 console.log(student_array);
 var display_student_array_sorting=[];
 var lenght_student_array=student_array.length;
 console.log(lenght_student_array);
 for(var k=0;k<lenght_student_array;k++)
{
display_student_array_sorting.push("<h4>name - "+student_array[k]+"</h4>" );
console.log(display_student_array_sorting);
}
var remove_commas=display_student_array_sorting.join(" ");
console.log(remove_commas);
document.getElementById("Display_Name_without_commas").innerHTML=remove_commas;
}
