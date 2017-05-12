import { template as tpl } from 'lodash'

export const HELLO = tpl('Hi <%- user.name %>! I am your personal water trainer 🙂')
export const FEATURES = [
  '☑  Daily water reminders',
  '☑  Personalized AI recommendations',
  '☑  Number of cups of water drank this week',
  '☑  Tips about water drinking',
].join('\n')

export const BEFORE_BEGIN = 'Before we begin...'
export const HOW_MANY_CUPS = 'How many cups of water do you drink a day?'
export const YOU_ARE_CHAMP = 'Your\'e a real champ! 8 cups is the recommended amount.'
export const RECOMMENDED = 'The recommended amount of water per day is eight 8-ounce glasses, equals to about 2 liters, or half a gallon.'
export const CHOOSE_FREQUENCY = 'Choose the frequency for water break reminders'
export const CHANGE_FREQUENCY = 'Changing frequency is super easy. Select new frequency:'
export const SET_DAYLY_REMINDER = 'Set a daily reminder to keep track with your good work'
export const NOTED = 'Noted 🙂'
export const NOTED_TRY_NOW = 'Noted 🙂 Let\'s give it a try now'
export const WELL_DONE = tpl('Well done <%- user.name %>! Keep it up!')
export const MENU_NOTICE = 'You can always get to the menu by asking for "Menu" 🙂'

export const UNKNOWN_COMMAND = tpl('Sorry <%- user.name %>. I am a young WaterBot and still learning. Type "Start" to show the start over')

export const FREQUENCY_0 = 'Stop reminders'
export const FREQUENCY_1 = 'Once a day'
export const FREQUENCY_2 = 'Twice a day'
export const FREQUENCY_3 = '3 times a day'

export const AMOUNT_1_2 = '1-2 cups'
export const AMOUNT_3_5 = '3-5 cups'
export const AMOUNT_6 = '6 and more'
export const AMOUNT_NA = 'I don\'t count'

export const LETS_TRY = 'Let\'s give it a try now, drink 1 cup of water and press the button'
export const DONE = 'Done'

export const WATER_TIME = 'Water time! 🙂'
export const WATER_TIME_MORNING = 'Good morning champ! Time for your morning drink'

export const HOW_MANY_GLASSES_TODAY = tpl('So how many glasses of water have you drank today <%- user.name %>?')
export const PROGRESS_SAVED = 'Thanks! 🙂 progress saved'
