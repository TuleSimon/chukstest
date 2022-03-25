import { GraphQLClient,gql } from "graphql-request";

const graphcms = new GraphQLClient("https://api-us-west-2.graphcms.com/v2/ckzv4flnd2ga601zaatk25ika/master");
const client = new GraphQLClient("https://api-us-west-2.graphcms.com/v2/ckzv4flnd2ga601zaatk25ika/master", {
            headers: {
              Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDUzNTYxNjUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NrenY0ZmxuZDJnYTYwMXphYXRrMjVpa2EvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZTBlN2VkZDEtYTBhNS00ZTg3LTg5ZGYtMWZiNGU1OTQxMDZiIiwianRpIjoiY2t6djZrdWtlMmU2eTAxeG5hYjdiOW5tdCJ9.mwpSPDxEiQJAZfKfae0azLkkYvRDkpOyNfpsSZDyFcbPup6-fBjW3lUR-Fkko_7IltJ38nqi4jpsN2WGn4jNN0k7EdyBe86BUSf3lVNs0FfWK7JQHEtFgnCrvXcRvD9pNi-M8b4F7QooT5re0vnFnCYhI4D3WHY0L8Aujky0fziW2X2-xwzwImHahLX41pZGmry8LPe1KJZanxn0Srvd2vtBX5GO4KEd7241YoNKhX8SLxX6QDyLq0MamHMcR1Rbqd4QoKauQ75InF-qLaTFHnK-dro_d2GvvThPO0qpH7JSI9yLO9ibzqeFCbfPorHniv5fjhWz1itncwzVU0qnMRJvXD5WGI0uzp1ffo4R7lARsyse2sGB-ZdgPDG3cDEzXjCAZEFBeXxWhAwM-SHXfGBBrnwpeioEcA1F9yKHICQ9LSaZK8b2MfXl-ArYgD89zdBAzppHN-Zpity4kP1IqiWThwAKxJG_wKvCV9Yed0dO2X4teuJPqm23BFx76iFTEBeW25Gs_vwMcZyTmm4dBnwBK_YyMQfRZje1hyYo-aoBk5iAPKFfPQNFCckfUb4jLPHus3HEnmCJkHDCF5dG56zOwGbH57yUwHx8JcsfLU70xIq-FbWLoWbFRIJUW_VrISY0det-grw_ZkpFBSHVa9mlPXVECmbadj1kq6KTcOI`,
            },
          });
// export const getQuestion = (department) => graphcms.request(
//     `
//     query Questions($department:String!) {
//       questions(where: {faculty: {name: $department}}) {
//         id
//         faculty {
//           name
//         }
//         options {
//           value
//           correct
//         }
//         questionBody
//       }
//     }
//   `,{department}
// );


export const loginStudent = (matno,password) => graphcms.request(
  `
  query StudentLogin($matno:String!,$password:String!) {
    students(where: {matno: $matno, AND: {password: $password}}) {
      id
      name
      matno
      email
      dateOfBirth
      profilePicture {
        url
      }
      department {
        haveExam
        faculty {
          name
        }
        id
        name
        examcourse {
          courseName
          id
        }
        examtime
      }
    }
  }
  
  `,{matno,password}
)



export const checkResult = (matno,password) => graphcms.request(
  `
  query StudentLogin($matno:String!,$password:String!) {
    students(where: {matno: $matno, AND: {password: $password}}) {
      id
      name
      matno
      email
      dateOfBirth
      profilePicture {
        url
      }
      courses {
        id
        courseName
        studentScores {
          score
          studentMatNo
        }
        department {
        name
        faculty {
          name
        }
      }
      }
    }
  }
  `,{matno,password}
)



export const getQuestion = (id) => graphcms.request(
  `
  query getCourse($id:ID!) {
    course(where: {id: $id}) {
      questions {
        questionBody
        options {
          value
          correct
        }
      }
    }
  }  
  `,{id}
)



  
export const submitResult = (scores,matnos,courses) => client.request(
    `mutation CreateScore($score:Int!,$matno:String!, $course:ID!) {
      createStudentScore(
        data: {score: $score, student: {connect: {matno: $matno}},
          course: {connect: {id: $course}}, studentMatNo: $matno}
      ) {
        id
      }
    }`,
    { score: scores, matno:matnos,course:courses }
  );

  export const publishResult = (ids) => client.request(
    `mutation publish($mat:String!) {
      publishStudentScore(where: {studentMatNo: $mat}) {
        id
      }
    }`,
    { mat: ids}
  );
