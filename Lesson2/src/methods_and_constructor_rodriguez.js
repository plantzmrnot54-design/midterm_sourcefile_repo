//function sdata(name, scores)
//{
//    this.name = name;
//    this.scores = scores;
//}
// vars here

var ave;
var highest;
var highestscore= 0;
var classaverage= 0;
var studentaverage;
var letter;


const studentData = //parang naka stack na array lang studentData[0].name  sample to or studentData[0].scores
[
  { name: "Lany", scores: [85, 90, 92] },
  { name: "Bongbung", scores: [70, 75, 68] },
  { name: "Dutherthe", scores: [95, 98, 92] },
  { name: "Pico", scores: [55, 60, 58] }
];
//console.log(studentData[0].name);
console.log("________STUDENT REPORT________")

for(let i = 0; i < studentData.length; i++)
    {
        ave =0;             // reset dito 
            
        for (let j = 0; j < studentData[i].scores.length; j++)//ave here
        {
            ave+=studentData[i].scores[j];
        }
                                                                                 
        studentaverage =averagefn(ave, studentData[i].scores.length); // main student average val nagawa goal by technicality
        letter = gradeletter(studentaverage);
        classaverage+=studentaverage; // class ave list aka total guy

        if (studentaverage>highestscore)//sino better
        {
            highestscore=studentaverage;
            highest=studentData[i].name;// di siya mattriger pag di high score 
        }
        
                //printers/ outputs
        console.log(studentData[i].name + "- Average " + studentaverage.toFixed(1)+" Grade: "+letter);
    }
    console.log("______________________")
    console.log("Class average; "+averagefn(classaverage, studentData.length).toFixed(1));
    console.log("top student : "+highest+" with a "+highestscore);


    // fn here aka methods
function gradeletter(grade)
{
    if(grade>=90)
    {
        return "A";
    }
    else if (grade>=80)
    {
        return "B";
    }
    else if(grade>=70)
    {
        return "C";
    }
    else if( grade>=60)
    {
        return "D";
    }
    else
    {
        return "F";
    }
}
function averagefn(averaw,slenth)
{
    return averaw/slenth;
}