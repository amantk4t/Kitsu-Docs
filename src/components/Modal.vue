<template>
    <!-- Put this part before </body> tag -->
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
        <div class="modal-box relative text-center">
            <h3 class="text-lg font-bold mb-4">Logging out will end our current session!</h3>
            <p class="py-4">Are you sure you want to logout?</p>
            <div class="flex justify-center items-center gap-4">
                <router-link to="/create_account">
                    <label for="my-modal-3" class="btn btn-error btn-outline modal-button">
                        Logout
                    </label>
                </router-link>
                <label for="my-modal-3" class="btn modal-button">
                    Cancel
                </label>
            </div>
        </div>
    </div>
</template>