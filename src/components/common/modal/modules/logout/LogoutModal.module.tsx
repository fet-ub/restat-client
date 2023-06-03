import React from 'react'
import Button from '../../../buttons/Button.common'

const LogoutModal = () => {
  return (
    <div>
        <h1 className='text-2xl font-semibold text-darkBlue text-center mt-1 '>Do you want to Logout ?</h1>

        <div className='flex gap-5 mt-9 mb-4'>
            <Button
            text='Cancel'
            fullWidth={true}
            buttonType='TERTIARY'
            />
            <Button
            text='confirm'
            fullWidth={true}
            buttonType='PRIMARY'
            />
        </div>
    </div>
  )
}

export default LogoutModal