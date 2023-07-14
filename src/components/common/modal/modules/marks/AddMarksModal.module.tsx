import React, { useState } from 'react';
import { IconRepository } from '../../../../../repository/icons/icon.repository';
import SelectInput from '../../../inputs/select-input/SelectInput.common';
import {
  ACADEMIC_YEAR,
  SOFTWARE_COURSES,
} from '../../../../../repository/constants/constants';
import Button from '../../../buttons/Button.common';
import { AddMarksModalPropType } from '../../../../../types/common/modal/add-marks.modal.type';
import { MarksType } from '../../../../../types/atoms/enums.atoms';
import { useTranslation } from 'react-i18next';

const AddMarksModal = ({ modalType }: AddMarksModalPropType) => {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const [form, setForm] = useState({
    course: '',
    year: '',
  });
  const [selectedFile, setSelectedFile] = useState<File | undefined>(undefined);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e?.target?.files) {
      //  setSelectedCategoryImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
      console.log(e.target.files[0]);

      console.log(selectedFile?.name);
    }
  };

  const handleXls = () => {
    setActive(0);
  };
  const handleCSV = () => {
    setActive(1);
  };

  const markText =
    modalType === MarksType.CA ? 'CA' : t('Exam', { ns: ['main', 'home'] });

  return (
    <div className="mb-10 px-5">
      <h2 className="text-3xl font-bold text-secondary dark:text-white">
        {t('Bulk Upload Marks', { ns: ['main', 'home'] })}
      </h2>
      <p className="text-xl mb-5 mt-1 dark:text-white">
        {modalType === MarksType.CA
          ? t('Here,you can upload bulk CA marks as .xls or .csv', {
              ns: ['main', 'home'],
            })
          : t('Here,you can upload bulk Exam marks as .xls or .csv', {
              ns: ['main', 'home'],
            })}
      </p>

      <div className={'bg-[#f4f4f4]  px-4 border-t-2 border-primary  py-4'}>
        <div className="flex mt-4">
          <div
            onClick={handleXls}
            className={`flex items-center justify-center border border-primary rounded-tl-md rounded-bl-md py-[10px] px-3 cursor-pointer  ${
              active === 0 ? 'bg-primary text-white' : ''
            }`}
          >
            <h3 className="text-xl">Xls or Xlsx</h3>
          </div>
          <div
            onClick={handleCSV}
            className={`flex items-center justify-center border border-primary rounded-tr-md rounded-br-md py-[10px] px-3 cursor-pointer  ${
              active === 1 ? 'bg-primary text-white' : ''
            }`}
          >
            <h3 className="text-xl">CSV</h3>
          </div>
        </div>

        <label htmlFor="dropzone-file">
          <div
            className={
              'flex items-center justify-center gap-1 border-dashed border border-primary bg-[#bfdffb] py-[15px] mt-4 rounded-lg '
            }
          >
            {selectedFile ? (
              <h1 className="text-2xl">{selectedFile.name}</h1>
            ) : (
              <>
                <h1 className="text-xl">
                  {t('Drag and Drop or', {
                    ns: ['main', 'home'],
                  })}
                  <span className="text-primary text-2xl">
                    {' '}
                    {t('Upload new file', {
                      ns: ['main', 'home'],
                    })}
                  </span>
                </h1>
                <div>
                  <IconRepository.UploadIcon />
                </div>
              </>
            )}
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept={active === 0 ? '.xlsx, .xls' : '.csv'}
          />
        </label>
      </div>

      <div className="mb-5 mt-8 flex flex-col gap-4">
        <SelectInput
          selectOptions={SOFTWARE_COURSES}
          placeholder="select a course"
          label={t('Course', {
            ns: ['main', 'home'],
          })}
          onChange={(e) => {
            setForm({ ...form, year: e.target.value });
          }}
          value={form.year}
        />
        <SelectInput
          selectOptions={ACADEMIC_YEAR}
          placeholder="year"
          label={t('Year', {
            ns: ['main', 'home'],
          })}
          onChange={(e) => {
            setForm({ ...form, year: e.target.value });
          }}
          value={form.year}
        />
      </div>

      <div className="w-full mt-8">
        <Button
          text={
            modalType === MarksType.CA
              ? t('Upload CA marks', {
                  ns: ['main', 'home'],
                })
              : t('Upload Exam marks', {
                  ns: ['main', 'home'],
                })
          }
          buttonType="PRIMARY"
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default AddMarksModal;
