<template>
    <q-page class="fit">
        <pre>
            Total no of students : {{ students.length }}
            {{ students }}
        </pre>
        <pre>
            Total no. of classes : {{ classes.length }}
            {{ classes }}
        </pre>
        <pre>
            Total no. of 2_classes : {{ classes.length }}
            {{ class2students }}
        </pre>
    </q-page>
    
    </template>
    
    <script>
    let students =[
    
    {
        Registration_number:"401",
        Name:"salma",
        Grade:"class 1",
        Date_of_Birth:"22-02-2001",
        Gender:"female",
        Admission_date:"12-05-24",
    
    },
    {
        Registration_number:"402",
        Name:"reema",
        Grade:"class 1",
        Date_of_Birth:"23-06-2001",
        Gender:"female",
        Admission_date:"12-05-24",
    
    },
    {
        Registration_number:"403",
        Name:"ravi",
        Grade:"class 2",
        Date_of_Birth:"28-12-2001",
        Gender:"male",
        Admission_date:"12-05-24",
    
    },
    {
        Registration_number:"404",
        Name:"roy",
        Grade:"class 3",
        Date_of_Birth:"22-02-2001",
        Gender:"male",
        Admission_date:"12-05-24",
    
    },
    {
        Registration_number:"405",
        Name:"riti",
        Grade:"class 2",
        Date_of_Birth:"22-02-2001",
        Gender:"female",
        Admission_date:"12-05-24",
    
    },
    {
        Registration_number:"406",
        Name:"sakhshi",
        Grade:"class 1",
        Date_of_Birth:"22-02-2001",
        Gender:"female",
        Admission_date:"12-05-24",
    
    },
    ]
    let classes =[
    
    {
        Name:"class 1",
        Status:"active",
    },
    {
        Name:"class 2",
        Status:"active",
    },
    
    {
        Name:"class 3",
        Status:"active",
    },
    ]
    let class2students = students.filter((student) =>{
        return student.grade === "class 2";
    })
    
    
    export default{
        name:'IndexPage',
        data (){
            return {
                students:students,
                classes:classes,
                class2students:class2students,
            }
        }
    }
    
    </script>
    