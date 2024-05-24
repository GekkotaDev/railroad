// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// use window_vibrancy::{apply_blur, apply_vibrancy, NSVisualEffectMaterial};

#[tokio::main]
fn main() {
  app_lib::run();
}
