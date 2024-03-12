import { config } from 'dotenv'
import dayjs from 'dayjs'
import 'dayjs/locale/es-mx'
import relativeTime from "dayjs/plugin/relativeTime";
config()
import { initBot } from './botUtils/bot'

dayjs.extend(relativeTime)
dayjs.locale('es-mx')

initBot()
