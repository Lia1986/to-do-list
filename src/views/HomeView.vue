<template>
  <div class="main">
    <div class="block">
      <h2 class="title">Add task</h2>
      <input
        v-model="title"
        placeholder="Title"
        class="input-title"
        type="text"
        :style="
          $v.title.$dirty && $v.title.$invalid ? 'margin-bottom: 5px;' : ''
        "
      />
      <span
        class="error-message mb-20"
        v-if="$v.title.$dirty && $v.title.$invalid"
      >
        Title is required
      </span>
      <button @click="add" class="add-btn">Add</button>
    </div>
    <div class="block">
      <h2 class="title">List of tasks</h2>
      <div v-if="getTasks.length">
        <task v-for="item in getTasks" :key="item.id" :task="item" />
      </div>
      <p v-else class="warning-message">The list is empty!!!</p>
    </div>
    <div class="block">
      <h2 class="title">Completed tasks</h2>
      <div v-if="getCompletedTasks.length">
        <task
          v-for="item in getCompletedTasks"
          :key="item.id"
          :task="item"
          :listType="'completed'"
        />
      </div>
      <p v-else class="warning-message">The list is empty!!!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import task from "../components/taskComponent.vue";
import { required } from "vuelidate/lib/validators";
export default {
  name: "HomeView",
  components: {
    task,
  },
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters(["getTasks", "getCompletedTasks"]),
  },
  methods: {
    ...mapActions(["addTask"]),
    add() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const task = {
          status: "in progress",
          title: this.title,
          id: new Date().getTime(),
        };
        this.addTask(task);
        this.title = "";
        this.$v.$reset();
      }
    },
  },
  validations: {
    title: {
      required,
    },
  },
};
</script>
