import { supabase } from '../config/supabase';

export const newsApi = async () => {
    try {
        const { data, error } = await supabase
            .from('news')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            throw error;
        }

        if (!data || data.length === 0) {
            throw new Error('No news articles available');
        }

        return data;
    } catch (err) {
        throw err;
    }
};