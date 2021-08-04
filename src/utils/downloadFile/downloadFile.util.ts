export const downloadFile = (data: any, title: string, ext: string) => {
  const a = document.createElement('a');
  const link = URL.createObjectURL(new Blob([data]));
  a.href = link;
  a.setAttribute('download', `${title}${ext}`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
