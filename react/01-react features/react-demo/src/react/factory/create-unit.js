import ReactElement from '../react/element'
import ReactTextUnit from '../unit/text-unit'
import ReactNativeUnit from '../unit/native-unit'
import ReactCompositeUnit from '../unit/composite-unit'

export default function createUnit(element) {
  if (['string', 'number'].includes(typeof element)) {
    return new ReactTextUnit(element)
  }
  if (element instanceof ReactElement && typeof element.type === 'string') {
    return new ReactNativeUnit(element)
  }
  if (element instanceof ReactElement && typeof element.type === 'function') {
    return new ReactCompositeUnit(element)
  }
}
