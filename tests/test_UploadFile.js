import { shallowMount } from '@vue/test-utils'
import FileUpload from 'vue-app/src/components/UploadFile'

describe('FileUpload Test', () => {
    const wrapper = shallowMount(FileUpload, {
        data() {
            return {
                progress: 1,
                message: 'Hello World'
            }
        }
    })
    expect(wrapper.find('.message').text()).toEqual('Hello World')
})