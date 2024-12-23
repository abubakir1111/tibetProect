import HeaderImgLogo from '../assets/img/Group.png';
import InputIcon1 from '../assets/icon/input_div/ep_arrow-down.png'
import InputIcon2 from '../assets/icon/input_div/formkit_date.png'
const HeaderJs = [
  {
    navbar: [
      {
        HeaderImg: [
          {
            img: HeaderImgLogo,
          }
        ],
        navbarText: [
          {
            text: 'Главная'
          },
          {
            text: 'Про гида'
          },
          {
            text: 'Программа тура'
          },
          {
            text: 'Стоимость'
          },
          {
            text: 'Блог'
          },
        ],
        navbarButtonText: [
          {
            buttonText: 'Консультация'
          },
        ],
      },
    ],
    headerInput: [
      {
        input: [
          {
            id: 0,
            textInput: 'Локация для тура',
            img: InputIcon1,
            inputTextP: 'выберите из списка'
          },
          {
            id: 1,
            textInput: 'Дата похода',
            img: InputIcon2,
            inputTextP: 'укажите диапазон'
          },
          {
            id: 2,
            textInput: 'Участники',
            img: InputIcon1,
            inputTextP: 'минимум 4 человека'
          }
        ],
        headerButton: [
          {
            id: 0,
            text: 'Найти программу'
          }
        ]
      }
    ]
  },
];

export default HeaderJs
