<template>
  <div class="task">
    <div class="task-header">
      <h3>{{ task.title }}</h3>
      <div>
        <button @click="complete" v-if="task.status !== 'completed'">
          <img src="@/assets/images/svg/complete.svg" alt="complete icon" />
        </button>
        <button @click="remove" v-if="listType !== 'completed'">
          <img src="@/assets/images/svg/trash.svg" alt="trash icon" />
        </button>
      </div>
    </div>
    <p class="status">Status: {{ task.status }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "taskComponent",
  props: ["task", "listType"],
  methods: {
    ...mapActions(["removeTask", "addCompletedTask"]),
    remove() {
      this.removeTask(this.task);
    },
    complete() {
      this.addCompletedTask(this.task);
    },
  },
};
</script>
