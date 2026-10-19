//Rodriguez, Justine Jaymark S. from DA 2-1
// firs js code here probobly dont use this for reference
{
    
    console.log("student scores:")
    var v;
    var totalscore=0;
    var pass =0;
    var faill =0;
    let student = [85,72,91,64,78];
    for (let i = 0; i<student.length;i++)       // student list printer
        {
            console.log(student[i])
        }

    console.log("")// pang space lang
    
    for (let i = 0; i < student.length; i++) 
        {
            let scounter = i+1;// mga counter to mga to check mo to mamaya
            v =student[i];
            totalscore= totalscore+v;

            if (v>=90)
            {
                console.log("Student :"+ scounter +" "+v+" excellent -passed")
                pass++;
            }
            else if (v>=80 && v<90)
            {
                console.log("Student :"+ scounter +" "+v+" very good -passed")
                pass++;
            }
            else if (v>=75 && v<80)
            {
                console.log("Student :"+ scounter +" "+v+" good -passed")
                pass++;
            }
            else 
            {      // bro sucks 
                console.log("Student :"+ scounter +" "+v+" failed")
                faill++;
            }
        }

    let ave = totalscore/5; // pede rin ata student.length
    console.log("Total score: "+ totalscore)
    console.log("Average score: "+ ave)
    
    student.sort();                    //nag sort ka dito 
    var lowest = student[0];
    let l =student.length-1
    var highest = student[l];
    console.log("Lowest score: "+ lowest)
    console.log("Highest score: "+ highest)
    console.log("Passed "+ pass)
    console.log("failed "+ faill)
}