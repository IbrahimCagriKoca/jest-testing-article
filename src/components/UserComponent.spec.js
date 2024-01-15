// UserComponent.spec.js
import { shallowMount } from '@vue/test-utils';
import { getUser } from '@/services/userService';
import UserComponent from '@/components/UserComponent.vue';

jest.mock('@/services/userService');

describe('UserComponent', () => {
    let wrapper;
    const createWrapper = (options = {}) => {
        wrapper = shallowMount(UserComponent, {
            ...options
        });
    };
    it('fetches and displays user data on successful request', async () => {
        getUser.mockImplementation(() => ({ id: 1, name: 'John Doe' }));

        createWrapper();

        await wrapper.find('button').trigger('click')
        expect(wrapper.vm.user.id).toBe(1);
        expect(wrapper.vm.user.name).toBe('John Doe');
        expect(wrapper.vm.error).toBeNull(); // Hata mesajının olmamasını kontrol et
    });

    it('displays error message on failed request', async () => {
        getUser.mockImplementation(async () => {
            throw new Error('User not found')
        });
        createWrapper()

        await wrapper.find('button').trigger('click');
        expect(wrapper.vm.user).toBeNull(); // User ID'nin görünmemesini kontrol et
        expect(wrapper.vm.error).toBe('Error fetching user: User not found');
    });
});
