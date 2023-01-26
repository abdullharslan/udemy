// composable for 
// const studentsViewTab = ref(0);
// const videos = ref(null);

import { ref } from 'vue';

 const useTab = () => {
    const tab = ref(0);
    const videos = ref(null);

    return { tab, videos };
    }

export default useTab;