import { getUser } from './userService'; // 'yourFile' dosyanızın gerçek adını kullanmalısınız

// Jest kullanılarak basit bir unit test örneği
describe('getUser function', () => {
    it('should resolve with user data when id is 1', async () => {
        const result = await getUser(1);
        expect(result).toEqual({ id: 1, name: 'John Doe' });
    });

    it('should reject with an error when id is not 1', async () => {
        await expect(getUser(2)).rejects.toThrow('User not found');
    });
});
