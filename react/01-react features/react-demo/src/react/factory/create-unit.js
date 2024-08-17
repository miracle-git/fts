import ReactElement from '../react/element'
import ReactTextUnit from '../unit/text-unit'
import ReactNativeUnit from '../unit/native-unit'
import ReactCompositeUnit from '../unit/composite-unit'
import { includeTypes } from '../utils/type'

export default function createUnit(element) {
  if (includeTypes(element, 'string', 'number')) {
    return new ReactTextUnit(element)
  }
  if (element instanceof ReactElement && typeof element.type === 'string') {
    return new ReactNativeUnit(element)
  }
  if (element instanceof ReactElement && typeof element.type === 'function') {
    return new ReactCompositeUnit(element)
  }
}
