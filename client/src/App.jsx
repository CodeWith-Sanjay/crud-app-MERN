import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import CreateUser from './Components/CreateUser'
import GetUser from './Components/GetUser'

function App() {

  const [selectedUser, setSelectedUser] = useState(null)
  const [refresh, setRefresh] = useState(false);

  const handleEdit = (user) => {
    setSelectedUser(user)
  }

  const handleRefresh = () => {
    setRefresh(prev => !prev);
  }

  return (
    <div>

      <Router>
        <Routes>
          <Route path='/' element={<GetUser setSelectedUser={setSelectedUser} refresh={refresh} />}/>
          <Route path='/create' element={<CreateUser selectedUser={selectedUser} handleRefresh={handleRefresh} />} />
          <Route path='/edit/:id' element={<CreateUser selectedUser={selectedUser} handleRefresh={handleRefresh} />} />
        </Routes>
      </Router>


      {/* <CreateUser selectedUser={selectedUser} handleRefresh={handleRefresh} />
      <GetUser setSelectedUser={setSelectedUser} refresh={refresh}/> */}
      {/* <UpdateUser /> */}
    </div>
  )
}

export default App
