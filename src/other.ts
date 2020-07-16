
import got from 'got';

export async function func()
{
	console.log('from func()');

    try {
        const response = await got('https://sindresorhus.com');
        console.log(response.body);
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
}
