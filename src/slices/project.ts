import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  pid: string; // project id;
  client_id: string; // client id
  callback_url: string;
  kakao_client_id: string;
  hasClientId: boolean;
}

interface ProjectState {
  furo: Project | null;
}

const initialState: ProjectState = {
  furo: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject(state, action: PayloadAction<Project>) {
      state.furo = action.payload;
    },
  },
});

export default projectSlice.reducer;
export const { setProject } = projectSlice.actions;
