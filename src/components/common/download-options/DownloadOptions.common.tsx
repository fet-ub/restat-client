import React from 'react'
import Button from '../buttons/Button.common';
import { IconRepository } from '../../../repository/icons/icon.repository';

const DownloadOptions = () => {
  return (
    <div className="flex gap-4 mt-10">
      <Button
        text="PDF"
        buttonType="SECONDARY"
        icon={<IconRepository.DownloadIcon height={25} />}
      />
      <Button
        text="CSV"
        buttonType="SECONDARY"
        icon={<IconRepository.DownloadIcon height={25} />}
      />
      <Button
        text="EXCEL"
        buttonType="SECONDARY"
        icon={<IconRepository.DownloadIcon height={25} />}
      />
      <Button
        text="PRINT"
        buttonType="SECONDARY"
        icon={<IconRepository.PageIcon height={25} />}
      />
    </div>
  );
}

export default DownloadOptions