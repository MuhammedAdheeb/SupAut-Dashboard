import CIcon from '@coreui/icons-react'
import { cilPeople } from '@coreui/icons'
import { CChartPie } from '@coreui/react-chartjs'
import React from 'react'
import { CButton, CCard, CCardBody, CCol, CRow } from '@coreui/react'
import { useParams } from 'react-router-dom'

function StudentSinglePage() {
  const handleClick = () => {
    console.log('Download IEP Report')
  }
  const handleClickAgain = () => {
    console.log('Send IEP Report')
  }
  const {
    id,
    grade,
    name,
    contact,
    careGiverEmail,
    careGiverContact,
    creativity,
    logical,
    time,
    visual,
  } = useParams()
  return (
    <>
      <CRow xs={{ cols: 2 }} md={{ cols: 2 }}>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardBody>
              <h2>
                <CIcon icon={cilPeople} height={36} style={{ marginRight: '20px' }} />
                Student Details
                <p>ID : {id}</p>
              </h2>
              <br />
              <div style={{ margin: '50px 0 30px 0' }}>
                <h5 style={{ width: '280px', display: 'inline-block' }}>Student Name</h5>
                <h5 style={{ display: 'inline-block' }}>: {name} </h5>
              </div>
              <div style={{ margin: '30px 0' }}>
                <h5 style={{ width: '280px', display: 'inline-block' }}>Student Contact Number</h5>
                <h5 style={{ display: 'inline-block' }}>: {contact}</h5>
              </div>
              <div style={{ margin: '30px 0' }}>
                <h5 style={{ width: '280px', display: 'inline-block' }}>Grade</h5>
                <h5 style={{ display: 'inline-block' }}>: {grade}</h5>
              </div>
              <div style={{ margin: '30px 0' }}>
                <h5 style={{ width: '280px', display: 'inline-block' }}>Caregiver Name</h5>
                <h5 style={{ display: 'inline-block' }}>: Jane Doe</h5>
              </div>
              <div style={{ margin: '30px 0' }}>
                <h5 style={{ width: '280px', display: 'inline-block' }}>
                  Caregiver Contact Number
                </h5>
                <h5 style={{ display: 'inline-block' }}>: {careGiverContact}</h5>
              </div>
              <div style={{ margin: '30px 0' }}>
                <h5 style={{ width: '280px', display: 'inline-block' }}>Caregiver Email Address</h5>
                <h5 style={{ display: 'inline-block' }}>: {careGiverEmail}</h5>
              </div>
              <CCol xs={12}>
                <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <CButton
                    color="primary"
                    size="lg"
                    style={{
                      marginRight: '150px',
                      width: '280px',
                      height: '50px',
                      fontSize: '15px',
                    }}
                    button={'value'.toString()}
                    onClick={handleClick}
                  >
                    Download IEP Report
                  </CButton>
                  <CButton
                    color="primary"
                    size="lg"
                    style={{ width: '280px', height: '50px', fontSize: '15px' }}
                    button={'value'.toString()}
                    onClick={handleClickAgain()}
                  >
                    Create IEP Report
                  </CButton>
                </div>
              </CCol>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardBody>
              <h2 style={{ marginBottom: '50px' }}>Progress of Student Skills</h2>
              <CChartPie
                width={700}
                height={500}
                data={{
                  labels: ['Creativity', 'Time management', 'Logical Skills', 'Visual Skills'],
                  datasets: [
                    {
                      backgroundColor: ['#ffc107', '#6610f2', '#00D8FF', '#DD1B16'],
                      data: [
                        parseInt(creativity),
                        parseInt(time),
                        parseInt(logical),
                        parseInt(visual),
                      ],
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default StudentSinglePage
