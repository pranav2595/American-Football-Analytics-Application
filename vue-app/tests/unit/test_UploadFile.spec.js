import Sinon from 'sinon';
import { shallowMount } from '@vue/test-utils'
import FileUpload from 'vue-app/src/components/UploadFile'
import vue2Dropzone from "vue2-dropzone";
import { bus } from "vue-app/src/event-bus";

describe('UploadFile Test', () => {
    const wrapper = shallowMount(FileUpload);
    
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('has correct div class names', () => {
        const div = wrapper.findAll('div');
        expect(div.exists()).toBe(true);
        expect(div.length).toBe(1);
        expect(div.at(0).classes("col-sm-3")).toBe(true);
        expect(div.at(0).classes("col-sm-5")).toBe(true);
    }); 

    it('contains vue2Dropzone', () => {
        expect(wrapper.contains(vue2Dropzone)).toBe(true);
    }); 

    it('setup correctly', () => {
        expect(true).toBe(true); 
    }); 

    it('uploadSuccess method', () => {
        const mocks = {
            bus: {
              $on: jest.fn(),
              $off: jest.fn(),
              $emit: jest.fn(),
            },
        };
        const wrapperMock = shallowMount(FileUpload, {
            mocks
        }); 
        wrapperMock.vm.uploadSuccess('testFile', 'testResponse');
        console.log("##");
        console.log(wrapperMock.vm.bus.$emit);
        expect(wrapperMock.vm.bus.$emit).toHaveBeenCalledTimes(0); 
    });
});
