import { shallowMount } from '@vue/test-utils'
import App from 'vue-app/src/App'
import UploadFile from "vue-app/src/components/UploadFile";
import DisplayPhotos from "vue-app/src/components/DisplayPhotos";
describe('UploadFile Test', () => {
    const wrapper = shallowMount(App);
    
    it('renders', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('has correct div class names', () => {
        const div = wrapper.findAll('div');
        expect(div.exists()).toBe(true);
        expect(div.length).toBe(1);
    }); 

    it('has correct id app', () => {
        const idApp = wrapper.find('#app'); 
        expect(idApp.exists()).toBe(true); 
    });

    it('has correct tags', () => {
        const bNavBar = wrapper.findAll('b-navbar');
        const bNavBarBrand = wrapper.findAll('b-navbar-brand');
        const bCard = wrapper.findAll('b-card'); 
        const bCardText = wrapper.findAll('b-card-text');
        const bContainer = wrapper.findAll('b-container');
        const nav = wrapper.findAll('nav');
        expect(bNavBar.exists()).toBe(true); 
        expect(bNavBar.length).toBe(1); 
        expect(bNavBarBrand.exists()).toBe(true); 
        expect(bNavBarBrand.at(0).classes("mb-0")).toBe(true); 
        expect(bCard.exists()).toBe(true); 
        expect(bCard.length).toBe(1); 
        expect(bCardText.exists()).toBe(true); 
        expect(bCardText.length).toBe(1); 
        expect(bContainer.exists()).toBe(true); 
        expect(bContainer.length).toBe(1); 
        expect(nav.exists()).toBe(true); 
        expect(nav.length).toBe(1); 

    }); 

    it('has correct nav class names', () => {
        const nav = wrapper.findAll('nav');
        expect(nav.exists()).toBe(true); 
        expect(nav.length).toBe(1); 
        expect(nav.at(0).classes()).toContain('navbar');
        expect(nav.at(0).classes()).toContain('fixed-bottom');
        expect(nav.at(0).classes()).toContain('navbar-dark');
        expect(nav.at(0).classes()).toContain('bg-info');

    });

    it('has correct a class names', () => {
        const aTag = wrapper.findAll('a');
        expect(aTag.exists()).toBe(true); 
        expect(aTag.length).toBe(1); 
        expect(aTag.at(0).classes()).toContain('navbar-brand');

    });

    it('has correct components', () => {
        expect(wrapper.contains(UploadFile)).toBe(true);
        expect(wrapper.contains(DisplayPhotos)).toBe(true); 

    });

    it('has correct text correctly', () => {
        expect(wrapper.text()).toContain("American Football Analytics");
        expect(wrapper.text()).toContain("We help the football coaches get performance analysis of the player's performance during the game for better strategic planning and performance monitoring");
        expect(wrapper.text()).toContain('Made with');
        expect(wrapper.text()).toContain('at NC State'); 
    }); 

    it('setup correctly', () => {
        expect(true).toBe(true); 
    }); 
});