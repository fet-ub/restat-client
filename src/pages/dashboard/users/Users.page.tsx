import React from 'react'

import styles from '../index/index.module.css'
import Button from '../../../components/common/buttons/Button.common';
import { IconRepository } from '../../../repository/icons/icon.repository';
import SelectInput from '../../../components/common/inputs/select-input/SelectInput.common';
import { ENGINEERING_DEPARTMENTS } from '../../../repository/constants/constants';
const UsersPage = () => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className={styles.head}>
          <h2>Dashboard</h2>
        </div>

        <div>
          <Button
            text="Add New User"
            buttonType="PRIMARY"
            icon={<IconRepository.PlusIcon height={18} width={18} />}
          />
        </div>
      </div>


      {/* icons row */}
      <div className='flex gap-4 mt-10'>
        <Button
        text='PDF'
        buttonType='SECONDARY'
        icon={<IconRepository.DownloadIcon height={25}/>}
        
        />
        <Button
        text='CSV'
        buttonType='SECONDARY'
        icon={<IconRepository.DownloadIcon height={25}/>}
        
        />
        <Button
        text='EXCEL'
        buttonType='SECONDARY'
        icon={<IconRepository.DownloadIcon height={25}/>}
        
        />
        <Button
        text='PRINT'
        buttonType='SECONDARY'
        icon={<IconRepository.PageIcon height={25}/>}
        
        />
      </div>

      <div className='w-[25%] mt-12'>
        <SelectInput
        selectOptions={ENGINEERING_DEPARTMENTS}
        label='Department'
        value=''
        
        />
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default UsersPage