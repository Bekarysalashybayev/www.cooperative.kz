interface ILink {
  title: string,
  type: 'pdf' | 'word' | 'link' | 'none',
  link: string,
  underline?: boolean | undefined,
  bold?: boolean | undefined
}

export const documentsFirsLinkList: ILink[] = [
  {
    title: 'Конституция Республики Казахстан;',
    type: 'none',
    link: '#',
  },
  {
    title: 'Гражданский кодекс Республики Казахстан (общей части) от 27.12.1994 г.;',
    type: 'none',
    link: '#',
  },
  {
    title: 'Закон "О потребительских кооперативах";',
    type: 'none',
    link: '#',
    underline: true
  },
  {
    title: 'Закон "Сельскохозяйственных кооперативах";',
    type: 'none',
    link: '#',
  },
  {
    title: 'Закон "О производственных кооперативах";',
    type: 'none',
    link: '#',
  },
  {
    title: 'Закон "О жилищных отношениях";',
    type: 'none',
    link: '#',
  },
  {
    title: 'Закон "О некоммерческих организациях"',
    type: 'none',
    link: '#',
  }
]

export const documentsSecondLinkList: ILink[] = [
  {
    title: 'Правила и стандарты СРО ОЮЛ "Национальная ассоциация кооперативов и других форм экономических сообществ РК"',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Чек-лист по финансовым пирамидам',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Типовой устав Потребительского кооператива (ПК)',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Типовой устав Жилищно-строительных кооперативов (ЖСК)',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Типовой устав Объединения Собственников Квартир (ОСИ)',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Договор публичной оферты для Комитета по развитию MLM индустрии',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Договор публичной оферты ассоциированных членов ОСИ',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Договор публичной оферты ассоциированных членов Комитета по развитию кооперативов вермифермеров ',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
]

export const documentsCertLinkList: ILink[] = [
  {
    title: 'Председатель кооператива',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Бизнес-акселератор',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Кооперативный агент',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Сертифицированный поставщик',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Менеджер по управлению жилыми и нежилыми зданиями',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Управляющий многоквартирным домом',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Хаус-мастер',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Вермифермеры',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
]
export const documentsEducationLinkList: ILink[] = [
  {
    title: 'Кооперативное предпринимательство',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Менеджер по управлению жилыми и нежилыми зданиями',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Управляющий многоквартирным домом',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Хаус-мастер',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  },
  {
    title: 'Производство вермикомпоста путем переработки органических отходо',
    type: 'none',
    link: '#',
    underline: true,
    bold: true,
  }
]
export const documentsPartnerLinkList: ILink[] = [
  {
    title: 'Единый Национальный Реестр Кооперативных Паев',
    type: 'none',
    link: '#',
    underline: true,
  },
  {
    title: 'Сертификационный центр ЖКХ',
    type: 'none',
    link: '#',
    underline: true,
  }, {
    title: 'Учебный центр ЖКХ-ИНФО',
    type: 'none',
    link: '#',
    underline: true,
  },
  {
    title: 'Учебный центр для вермифермеров KazAGO',
    type: 'none',
    link: '#',
    underline: true,
  },

]

export default {}
