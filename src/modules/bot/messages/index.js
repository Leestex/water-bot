import { template as tpl } from 'lodash'

export const HELLO = tpl('Hi <%- profile.first_name %>! I am your personal water trainer 🙂')
export const FEATURES = tpl([
  '☑  Daily water reminders',
  '☑  Personalized AI recommendations',
  '☑  Number of cups of water drank this week',
  '☑  Tips about water drinking',
].join('\n'))

export const BEFORE_BEGIN = tpl('Before we begin...')
export const HOW_MANY_CUPS = tpl('How many cups of water do you drink a day?')
export const YOU_ARE_CHAMP = tpl('Your\'e a real champ! 8 cups is the recommended amount.')
export const RECOMMENDED = tpl('The recommended amount of water per day is eight 8-ounce glasses, equals to about 2 liters, or half a gallon.')
export const CHOOSE_FREQUENCY = tpl('Choose the frequency for water break reminders')
export const SET_DAYLY_REMINDER = tpl('Set a daily reminder to keep track with your good work')
export const NOTED = tpl('Noted 🙂')
export const NOTED_TRY_NOW = tpl('Noted 🙂 Let\'s give it a try now')
export const WELL_DONE = tpl('Well done <%- profile.first_name %>! Keep it up!')
export const MENU_NOTICE = tpl('You can always get to the menu by asking for "Menu" 🙂')

export const UNKNOWN_COMMAND = tpl('Sorry <%- profile.first_name %>. I am a young WaterBot and still learning. Type "Start" to show the start over')
