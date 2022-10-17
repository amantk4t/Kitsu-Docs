<script setup>
import { useAuthStore } from '../stores/FirebaseAuth';
const logout = () => {
    console.log("Logging out..")
    useAuthStore().logout()
}
</script>

<template>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="logout-modal" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box relative text-center">
            <h3 class="text-lg font-bold mb-4">Logging out will end our current session!</h3>
            <p class="py-4">Are you sure you want to logout?</p>
            <div class="flex justify-center items-center gap-4">
                <button @click="logout" class="p-0">
                    <label for="logout-modal" class="btn btn-error btn-outline modal-button">
                        Logout
                    </label>
                </button>
                <label for="logout-modal" class="btn modal-button">
                    Cancel
                </label>
            </div>
        </div>
    </div>
</template>