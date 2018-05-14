import YOUTUBE_KEY from '../config/youtubekey';

export async function youtube(query) {
  try {
    const fixed = 'https://www.googleapis.com/youtube/v3/search';
    const url = `${fixed}?part=snippet&maxResults=5&q=${query}&key=${YOUTUBE_KEY}`;
    const body = await fetch(url);
    const res = await body.json();
    if (res.error) {
      throw new Error(res.error.message);
    }
    return res.items;
  } catch (e) {
    throw new Error(e);
  }
}

export function studentHrData() {
  const data = [
    {
      computerNumber: 1,
      studentHR: {
        studentDetails: {
          studentName: 'student 1',
          bForm: '1234-1',
          dob: '01-01-1990',
          idMark: 'something on somewhere',
          hafiz: false
        },
        fatherDetails: {
          fatherName: 'father 1',
          fatherCnic: '1234-56789-1',
          fatherMobile: '0310 1234561',
          fatherAddress:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita libero eligendi dolorum est nesciunt sed ut odio amet quos alias.'
        },
        classDetails: {
          admissionNumber: 'ADE-323-1',
          computerNumber: '11',
          selectClass: '9',
          selectSection: 'a',
          selectSubject: 'ICT'
        },
        emergencyDetails: {
          emergencyName: 'relative 1',
          emergencyRelation: 'uncle',
          emergencyNumber: '0300 9999991',
          medicalNotes: 'allergy to nuts'
        }
      }
    },
    {
      computerNumber: 2,
      studentHR: {
        studentDetails: {
          studentName: 'student 2',
          bForm: '1234-2',
          dob: '01-01-1990',
          idMark: 'something on somewhere',
          hafiz: true
        },
        fatherDetails: {
          fatherName: 'father 2',
          fatherCnic: '1234-56789-2',
          fatherMobile: '0310 1234562',
          fatherAddress:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem laudantium, ducimus dolorum mollitia quaerat. Molestias.'
        },
        classDetails: {
          admissionNumber: '',
          computerNumber: '2',
          selectClass: '9',
          selectSection: 'a',
          selectSubject: 'ICT'
        },
        emergencyDetails: {
          emergencyName: 'relative 2',
          emergencyRelation: 'uncle',
          emergencyNumber: '0300 9999992',
          medicalNotes: 'allergy to nuts'
        }
      }
    },
    {
      computerNumber: 3,
      studentHR: {
        studentDetails: {
          studentName: 'student 3',
          bForm: '1234-3',
          dob: '01-01-1990',
          idMark: '',
          hafiz: false
        },
        fatherDetails: {
          fatherName: 'father 3',
          fatherCnic: '1234-56789-3',
          fatherMobile: '0310 1234563',
          fatherAddress:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum sed hic id voluptatem cupiditate eligendi iusto ipsa. Impedit, vitae, ex.'
        },
        classDetails: {
          admissionNumber: 'ADE-323-3',
          computerNumber: '3',
          selectClass: '9',
          selectSection: 'a',
          selectSubject: 'Biology'
        },
        emergencyDetails: {
          emergencyName: 'relative 3',
          emergencyRelation: 'uncle',
          emergencyNumber: '0300 9999993',
          medicalNotes: ''
        }
      }
    },
    {
      computerNumber: 4,
      studentHR: {
        studentDetails: {
          studentName: 'student 4',
          bForm: '1234-4',
          dob: '01-01-1990',
          idMark: '',
          hafiz: false
        },
        fatherDetails: {
          fatherName: 'father 4',
          fatherCnic: '1234-56789-4',
          fatherMobile: '0310 1234564',
          fatherAddress:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae odio nam animi nemo neque! Laborum, saepe aliquam officiis ipsum voluptatem.'
        },
        classDetails: {
          admissionNumber: '',
          computerNumber: '4',
          selectClass: '9',
          selectSection: 'a',
          selectSubject: 'ICT'
        },
        emergencyDetails: {
          emergencyName: 'relative 4',
          emergencyRelation: 'uncle',
          emergencyNumber: '0300 9999994',
          medicalNotes: 'a'
        }
      }
    }
  ];
  return data;
}

// export function receiveStudentRecord(record) {
//   console.log('student details are ', record);
// }

export async function getPics(query){
  const url="https://pixabay.com/api";
  const key= "8919227-c987f39bcc16f253cc149b502";
  const apiUrl=`${url}/?key=${key}&q=${query.searchText}&image_type=photo&per_page=${query.num}&safesearch=true`;
  // const res=await axios.get(apiUrl)
  // return res
  const body=await fetch(apiUrl)
  const res=await body.json();
  return res;
}
