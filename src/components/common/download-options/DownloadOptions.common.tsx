import React from 'react'
import Button from '../buttons/Button.common';
import { IconRepository } from '../../../repository/icons/icon.repository';
import { useTranslation } from "react-i18next";


const DownloadOptions = () => {
    const { t } = useTranslation();
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
        text={t("PRINT", { ns: ["main", "home"] })}
        buttonType="SECONDARY"
        icon={<IconRepository.PageIcon height={25} />}
      />
    </div>
  );
}

export default DownloadOptions