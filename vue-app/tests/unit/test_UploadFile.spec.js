import { shallowMount } from '@vue/test-utils'
import FileUpload from 'vue-app/src/components/UploadFile'

describe('UploadFile Test', () => {
    const wrapper = shallowMount(FileUpload);
    
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('has correct div class names', () => {
        const div = wrapper.findAll('div');
        expect(div.exists()).toBe(true);
        expect(div.length).toBe(2);
        expect(div.at(0).classes("col-sm-3")).toBe(true);
        expect(div.at(1).classes("alert")).toBe(true);
    })

    it('has correct message correctly', () => {
        expect(wrapper.text()).toContain('Upload');
    }); 

    it('setup correctly', () => {
        expect(true).toBe(true); 
    }); 
});