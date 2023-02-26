import { FileInputListType } from '@/components/sponsor/FileInputBox';

export const fileInputList: FileInputListType = [
  {
    key: 'businessRegistrationFile',
    name: '사업자등록증',
    labelText: 'pdf 파일을 등록해주세요',
    fileType: 'pdf',
  },
  {
    key: 'bankBookFile',
    name: '통장사본',
    labelText: 'pdf 파일을 등록해주세요',
    fileType: 'pdf',
  },
  {
    key: 'logoImage',
    name: '후원사 로고',
    labelText: 'png 또는 jpg 파일을 등록해주세요',
    fileType: 'image',
  },
];

export const sponsorContractProcedure = [
  '후원 신청서 제출(완료)',
  '후원사 검증',
  '후원금 입금',
  '계약 체결',
];

export const sponsorContractInfo = [
  '본 문서는 "신청서" 역할을 하는 것이며, 후원 신청 "확정"의 역할을 하지 않습니다.',
  '후원 신청 확정은 후원 약관에 따라 계약서 작성 후 14일 이내에 일시불로 입금이 된 이후 확정 안내를 받을 수 있으며, 만일 정당한 사유 발생 시 연장을 신청하실 경우 승인될 수 있습니다.',
  '추가 문의 사항이 있으신 경우 sponsor@pycon.kr로 연락 부탁드립니다.',
];
